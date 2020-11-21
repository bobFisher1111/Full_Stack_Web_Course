require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
//const encrypt = require("mongoose-encryption"); // not needed for hasing
//const md5 = require("md5"); // used for hashing password, upgrading to bcrypt
//const bcrypt = require("bcrypt"); // upgraded from md5, has salting and salting routes
//const saltRounds = 10; // used in bcrypt and # of salting routes
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// used to work with saving passport-google-oauth20 when logging in to save time on code, https://www.npmjs.com/package/mongoose-findorcreate
var findOrCreate = require('mongoose-findorcreate')

const app = express();

// log api key use process
console.log(process.env.API_KEY);

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

// Passport Part 1: Must go above mongoose.connect and below app = express();
app.use(session({
    secret: "Our little sercret.", // will move this to env file
    resave: false,
    saveUninitialized: false
}));
// Passport Part 2: Initalize it
app.use(passport.initialize()); // sets up passport se we can start to use it
// Passport Part 3: setup passport.session()
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", { useUnifiedTopology: true, useNewUrlParser: true});
mongoose.set("useCreateIndex", true); // fix deprecation warning collection.ensureIndex is depreceated

// Step 1: Encrytion of database
// Create Schema for database, add encryption with = new mongoose.Schema from the mongoose class
const userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    email: String,
    password: String,
    googleId: String, // this was add when apply google aouth
    secret: Array
});

// Passport Part 4: add passport-local-mongoose plugin to the schema created above:
userSchema.plugin(passportLocalMongoose); // this is where we will hash & salt and save users
// Step 1. Google OAUTH20
userSchema.plugin(findOrCreate); // this is coming from mongoose-findorcreate

// Step 2: Encryption of database
// creating a secret string, but there are other ways of doing it
//const secret = "Thisisourlittlesecret." // this is string we are using for encryption
// this will encrypt entire database, add encryptedField so it only does what you want
//userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});  // not need for hasing

// create model from schema:
const User = new mongoose.model("User", userSchema);

// Passport Part 5: Use createStragety instead of authneticate:
passport.use(User.createStrategy());
/* replaced with step4. Google auth20 way
passport.serializeUser(User.serializeUser()); //Serialize: Creates message inside Cookie
passport.deserializeUser(User.deserializeUser());//Deserialize: Descovers the message inside the cookies
*/

// Step 5. Google OAUTH20 serilize user & deserilize user
passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

// Step 2. Google OAUTH20
passport.use(new GoogleStrategy({
    clientID : process.env.CLIENT_ID, // Client Id from .env file, renamed this clientID, fix error
    //consumerSecret: process.env.CLIENT_SECRET, // Client Secret from .env file
    clientSecret: process.env.CLIENT_SECRET, // Client Secret from .env file
    callbackURL: process.env.CALL_BACK_URL, // this is regestered on the site saved in the .env file
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(token, tokenSecret, profile, done) {
      console.log(profile);
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));

app.get("/", function(req, res){
    res.render("home");
});

// Step 3. Google OAUTH20 - this sends to google to sign in
app.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"] }) // this will get the user email and other profile information
);

// Step 4. Google OAUTH20, after auth, sends back to secrets or login page
app.get("/auth/google/secrets", // this is what we put on google dev redirect would be, match exactly
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to secrets
    res.redirect('/secrets');
  });

app.get("/login", function(req, res){
    res.render("login");
});

app.get("/register", function(req, res){
    res.render("register");
});

/* bcrypt way of doing it Part 1:
// create a new user, post to create new users on the register route, then go to the secrets page
app.post("/register", function(req, res){
    // bcryp the password & create user
    // doc: https://www.npmjs.com/package/bcrypt
    bcrypt.hash(req.body.password, saltRounds, function(err, hash){
        const newUser = new User({
            email: req.body.username,
            password: hash // hasing the password
        });
        // Step 3: Encryption of database, will encrypt when saving to mongodb
        // saving newUSer to mongodb
        newUser.save(function(err){
            if (err){
                console.log(err);
            }else{
                res.render("secrets"); // this takes them to the secrets page
            }
        });
    });
});
/*
   - Step 3: Submit own secrets
*/
app.get("/secrets", function(req, res){
    User.find({"secret": {$ne: null}}, function(err, foundUsers){ // means not equal to null
        if (err){
            console.log(err);
        }else{
            if (foundUsers){
                res.render("secrets", {usersWithSecrets: foundUsers})
            }
        }
    });
});
app.post("/register", function(req, res){
    // Passport way of doing it:
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err){
            console.log(err);
            res.redirect("/register");
        }else{
            // this is the local strategy
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });
});

/*
    - Passport way of doing it Part 2: Activate
*/
app.post("/login", function(req, res){
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    // this method login comes from passport
    req.login(user, function(err){
        if (err){
            console.log(err);
        }else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secrets");
            });
        }
    });
});

/* bcrypt way of doing it Part 2:
// login route, check if user is regester or not and then go to the secrets page
app.post("/login", function(req, res){
    const username = req.body.username;
    const password = req.body.password; // hash password here so that they match hash in database
    // Step 4: Encryption of database, will decrypted auto when findOne method
    // Use findOne to search if email is in database and if so make sure password matches up
    User.findOne({email: username}, function(err, x){
        if (err){
            console.log(err);
        }else{
            if(x){
                // This is where we will use bcrypt compare to check if user password is correct or not
                // doc: https://www.npmjs.com/package/bcrypt
                bcrypt.compare(password, x.password, function(err, result){
                    if (result === true){
                        res.render("secrets");
                    }
                });
            }
        }
    });
});
*/

// Step 1: Submit own secrets
app.get("/submit", function(req, res){
    if (req.isAuthenticated()){
        res.render("submit");
    }else{
        res.redirect("/login");
    }
});

// Step 2: Submit own secrets, make a post
app.post("/submit", function(req, res){
    const submittedSecret = req.body.secret;

    console.log(req.user._id);

    User.findById(req.user._id, function(err, foundUser){
        if (err){
            console.log(err);
        } else{
            if (foundUser){
                foundUser.secret = submittedSecret;
                foundUser.save(function(){
                    res.redirect("/secrets");
                });
            }
        }
    });
});

/*
     - Passport way of doing it Part 3: Deactivate
*/
app.get("/logout", function(req, res){
    // logout is passport function
    req.logout();
    res.redirect("/");
});

app.listen(3000, function(){
    console.log("Server started on port 3000.");
});


