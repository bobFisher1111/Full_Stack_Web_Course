/*
    - Set up program:
        - Step 1: create directory
        - Step 2: create .js file
        - Step 3: intialize it: 
            npm init
        - Step 4: install express: 
            npm install express
        - Step 5: import express:
            const express = require("express");
        - Step 6: use app module:
            const app = express();
        - Step 7: create home route:
            app.get("/", function(req, res){
                res.sendFile(__dirname + "index.html");
            });
        - Step 8: put app on port of choice
            app.listen(3000, function(){
                console.log("Server is running on port 3000.");
            });
        - Step 9: start server:
            nodemon calculator.js // if it doesn't work, may have to npm install -g nodemon
    - packages:
        - allows us to pass the information we get from post request, so we can do calculations
        -  is a middleware that intercepts the raw body and parses it in to a form that your application 
            code can easily use.
        - npm install body-parser
        - several modes:
            - text
                app.use(bodyParser.text({extended: true}));
            - json
                app.use(bodyParser.json({extended: true}));
            - urlencoded
                app.use(bodyParser.urlencoded({extended: true}));
*/
// import express:
const express = require("express");
const bodyParser = require("body-parser"); // lets you tap into the body of html

// use app module:
const app = express();
// use body-parser with app module
app.use(bodyParser.urlencoded({
    extended: true
}));

// create get home route: use send file to grab index.html
app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); // __dirname is used to get the location, better practice to have so when deploying on server
});

// create post for home route:
app.post("/", function(req, res){
    /* Creating calculator part*/
    // gather input with req.body
    var num1 = Number(req.body.num1); // convert to a number from a string
    var num2 = Number(req.body.num2); // convert to a number from a string
    var result = num1 + num2;
    // send result
    res.send("Result of the calculation is: " + result);
});
// create get for bmi page
app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html"); // __dirname is used to get the location, better practice to have so when deploying on server
});
// create post for bmi page
app.post("/bmi", function(req, res){ 
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var userbmi = (weight / Math.pow(height, 2));

    res.send("Your BMI is " + userbmi);
});

// app on port 3000:
app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});