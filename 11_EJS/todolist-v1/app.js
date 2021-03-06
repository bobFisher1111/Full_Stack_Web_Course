/*
    - Notes for EJS:
        - https://ejs.co // home page
        - https://github.com/mde/ejs/wiki/Using-EJS-with-Express // for express
        - create folder called views, that will hold ejs files that the view engine will look for
        - Tags:
            <% 'Scriptlet' tag, for control-flow, no output
            <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
            <%= Outputs the value into the template (HTML escaped)
            <%- Outputs the unescaped value into the template
            <%# Comment tag, no execution, no output
            <%% Outputs a literal '<%'
            %> Plain ending tag
            -%> Trim-mode ('newline slurp') tag, trims following newline
            _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it
        - Display value from javascript into html using ejs -"Templeting"
            - list.ejs
                <h1>It's a <%= kindOfDay %>!</h1>
            - app.js
                app.use("view engine", "ejs");
                res.render('list', {kindOfDay: day});


*/
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); // this is the module created locally

// creating app as express()
const app = express();

// use bodyparser
app.use(bodyParser.urlencoded({extended: true}));
// allow use static like .css and other files in the public directory
app.use(express.static("public"));

// set ejs, initialize it
app.set("view engine", "ejs");

// Creating array with pre set values and then will add to this set of list
let items = ["Wake Boys Up", "Give Them Bottle", "Turn On Baby Bus", "Change Dirty Diapers"];
let workItems = [];

app.get("/", function(req, res){
    /*
    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    switch (currentDay){
        case 0:
            day = "Sudnay"
            break;
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
            break;
        case 6:
            day = "Saturday"
            break;
        default:    
        console.log("Error: current day is equal to: " + currentDay);
    }
    */
    /*
    if (currentDay == 6 || currentDay == 0){
        day = "Weekend";
    }else{
        day = "Week Day";
    }
    */
    // for the render, if you need to pass more than one call to list, all must be passed in the same render or it will fail
    let day = date.getDate(); // this is from the module, put parenthese around date thats being returned

    res.render('list', {
        listTitle: "Get Boys Ready!!! " + day,
        newListItems: items
    });

    //res.send(); // sends all messages and must be done at the end, also can send something with it,
    // do not use if you use sendFile or render
});
// Create post to handle add new item to the to do list
app.post("/", function(req, res){

    // this gets the value from the list.ejs newItem that user puts in
    let item = req.body.newItem;

    // change direction if be added to work or get boys ready
    if (req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        // append(push) item to items array
        items.push(item);
        // redircet to home route and pass item to render
        res.redirect("/");
    }  
});

// Creating a work route:
app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List", 
        newListItems: workItems
    });
})

app.post("/work", function(req, res){
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.get("/about", function(req, res){
    res.render("about");
}) 

app.listen(3000, function(){
    console.log("<h1>Server started on port 3000</h1>");
})