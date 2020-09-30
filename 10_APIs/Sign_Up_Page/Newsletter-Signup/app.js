// imports
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// create app constant new instance of express
const app = express();

// Initializing the imports
// allow for static html file to use stuff like style.css inside the html files or other static files, kept inside a file named public,
// No need to specify in the html that ex css/styles.css is in the public/css/styles.css
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
// Set up get route for singup page using server
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signUp.html");
})

// post the data from the sign up and console log it
app.post("/", function(req, res){
    // saving data as a veriable thats being typed in
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var emailName = req.body.email;

    console.log(firstName, lastName, emailName);
})
// setup running on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});