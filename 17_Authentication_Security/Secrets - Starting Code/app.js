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
    email: String,
    password: String
});

// Passport Part 4: add passport-local-mongoose plugin to the schema created above:
userSchema.plugin(passportLocalMongoose); // this is where we will hash & salt and save users

// Step 2: Encryption of database
// creating a secret string, but there are other ways of doing it
//const secret = "Thisisourlittlesecret." // this is string we are using for encryption
// this will encrypt entire database, add encryptedField so it only does what you want
//userSchema.plugin(encrypt, {secret: process.env.SECRET, encryptedFields: ["password"]});  // not need for hasing

// create model from schema:
const User = new mongoose.model("User", userSchema);

// Passport Part 5: Use createStragety instead of authneticate:
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser()); //Serialize: Creates message inside Cookie
passport.deserializeUser(User.deserializeUser());//Deserialize: Descovers the message inside the cookies

app.get("/", function(req, res){
    res.render("home");
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
    - Passport way of doing it Part 1: Activate
*/
app.get("/secrets", function(req, res){
    if (req.isAuthenticated()){
        res.render("secrets");
    }else{
        res.redirect("/login");
    }
});
app.post("/register", function(req, res){
    // Passport way of doing it:
    User.register({username: req.body.username}, req.body.password, function(err, user){
        if (err){
            console.log(err);
            res.redirect("/register");
        }else{
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


