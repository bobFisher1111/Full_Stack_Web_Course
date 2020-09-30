
// Can only have 1 res.send but as many res.write
// install: npm install body-parser, allows look through body of post request and fetch input based on name of input in html file
// imports:
const express = require("express");
const https = require('https'); 
const bodyParser = require("body-parser");

// initialize express
const app = express();

// get app to use the body-parser
app.use(bodyParser.urlencoded({extended: true}));

// homepage:
app.get("/", function(req, res){
    // this gets directory name and sets it to index.html for homepage, dirname is just for root of project
    res.sendFile(__dirname + "/index.html");
});

// For the post:
app.post("/", function(req, res){
    // api endpoint
    const units = "metric";
    const query = req.body.cityName;
    const apiKey = "eb310b304549000b3dffe11efbef814c";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + units;
    // using https.get api and loging response
    https.get(url, function(response){
        console.log(response.statusCode);

        // Parsing the json response:
        response.on("data", function(data){ // string data is required for retrieving the data
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            // Parsing to get value of temp
            const temp = weatherData.main.temp; // hierachal main --> temp
            const fahrenheit = (temp * (9/5) + 32);
            console.log("The temp is: " + temp);

            // getting weather icon:
            const icon = weatherData.weather[0].icon;
            // Get the image url
            const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

            // getting value of weather description, is an array unlike dict for temp, and 1 item so use index
            // 0, and then tap into description
            const weatherDescription = weatherData.weather[0].description;
            res.write("<p>The weather description is: " + weatherDescription + "</p>");
            res.write("<h1>The temperature in " + query + " is: " + fahrenheit + " degrees Fahrenheit.</h1>");
            res.write("<img src=" + imageUrl + ">"); // this adds the image
            res.send();
            // getting base value
              
        });
    });
    //res.send("Server is up and running");
});

// set to run on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});