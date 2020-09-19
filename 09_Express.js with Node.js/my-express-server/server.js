/*
    - Express js:
        - Documentation:
            https://expressjs.com/en/starter/installing.html
        
        - Request & Responses: Get Request, this is the callback function
            req = request 
            res = response 

        - Add nodemon to server, incase changes are made to code it will restart automatically 
            and upload new code
            - install:
                npm install -g nodemon
            - run it:
                nodemon server.js
*/
// Creating express Server
// importing express:
const express = require("express");

// this represents the express module
const app = express();

// Home page
app.get("/", function(req, res){ 
    console.log(req);
    res.send("<h1>Hello</h1>"); // send hello in h1 tag back to response
});

// Contact page
app.get("/contact", function(req, res){ 
    console.log(req); 
    res.send("<h1>Contact me at: bobthefisher@gmail.com</h1>"); 
});

// About page
app.get("/about", function(req, res){ 
    console.log(req); 
    res.send("<h1>About: Bob The Fisher</h1> \
        <br> \
        <h3>Plays only Final Fantasy VIII</h3>"); 
});

// Hobbies page
app.get("/bobbies", function(req, res){ 
    console.log(req); 
    res.send("<h1>Hobbies: Bob The Fisher</h1> \
        <br> \
        <h3>Plays only Final Fantasy VIII</h3> \
        <br> \
        <h3>Plays only Final Fantasy VIII</h3>"); 
});

// set app to listen for any request on specific port 3000, add call back an anonymous function console output message
app.listen(3000, function(){
    console.log("Server started on port 3000"); // prints message when server starts on port 3000
});

