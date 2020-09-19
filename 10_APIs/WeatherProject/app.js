
// imports:
const express = require("express");
const https = require('https'); 

// initialize express
const app = express();

// homepage:
app.get("/", function(req, res){
    // api endpoint
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb310b304549000b3dffe11efbef814c&units=metric";
    // using https.get api and loging response
    https.get(url, function(response){
        console.log(response.statusCode);

        // Parsing the json response:
        response.on("data", function(data){ // string data is required for retrieving the data
            const weatherData = JSON.parse(data);
            console.log(weatherData);

            // Parsing to get value of temp
            const temp = weatherData.main.temp; // hierachal main --> temp
            console.log("The temp is: " + temp);

            // getting value of weather description, is an array unlike dict for temp, and 1 item so use index
            // 0, and then tap into description
            const weatherDescription = weatherData.weather[0].description;
            console.log("The weather description is: " + weatherDescription)

            // getting base value
        });
    });
    res.send("Server is up and running");
});

// set to run on port 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});