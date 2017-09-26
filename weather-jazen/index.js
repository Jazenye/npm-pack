#!/usr/bin/env node

var foo = require("./a").foo;
foo("jazen !");

var axios = require("axios")
var data = {}

if(process.argv[2]){
    data.params = {
        city: process.argv[2]
    }
}

axios.get('http://api.jirengu.com/weather.php', data)
    .then(function(response) {
        // console.log(response.data);
        console.log("\nToday is: " + response.data["date"]);
        // console.log(response.data["results"][0]);
        var weather = response.data["results"][0]
        console.log("城市： "+weather["currentCity"]);
        console.log("pm2.5： "+weather["pm25"]+"\n\n");

        var more = response.data["results"][0].weather_data;
        // console.log(more)

        for(var i = 0; i < 4; i++){
            console.log("date: ", more[i]["date"]);
            console.log("weather: ", more[i]["weather"]);
            console.log("wind: ", more[i]["wind"]);
            console.log("temperature: ", more[i]["temperature"]);
            console.log("-------------")
        }
    })
    .catch(function(error) {
        console.log(error);
    })