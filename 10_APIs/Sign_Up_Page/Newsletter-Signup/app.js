// imports
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    //console.log(firstName, lastName, emailName);
    // going to be using mailchimp api
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    // turning data into json file
    const jsonData = JSON.stringify(data);
    const url = "https://us2.api.mailchimp.com/3.0/list/f019f74e3b";
    const options = {
        method: "POST",
        auth: "turtle1:d02a8fdb3c6acd3c45fa2ef3b26a330f-us2"
    }
    // make post request:
    const request = https.request(url, options, function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();

})
// setup running on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

// API Key: https://us2.admin.mailchimp.com/account/api/
// d02a8fdb3c6acd3c45fa2ef3b26a330f-us2
// unique id: list id
// f019f74e3b