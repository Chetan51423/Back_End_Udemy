const express = require("express");

const app =express();

 const https = require("https");  // no need to install it through hyper terminal. It is native package in nodejs



app.get("/", function(req,res){
    res.send("Server is up and running");
})

// var url = https//api.openweathermap.org/data/2.5/weather?q=London&appid=eca2b95a622dfece5dc326fb718c0d44;

// https.get(url, function(response){
//     console.log(response);
// });




app.listen(000, function(req,res){
    console.log("Server is running on port 3000");
})
