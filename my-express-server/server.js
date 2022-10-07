const { response } = require("express");
const express = require("express");

const app = express();

app.get("/",function(req, res){
    res.send("<h1>Hello Chetan!</h1>");
    
    console.log(req);
});

app.get("/contact",function(req, res){
    res.send("<h1>Hello This is contact page!</h1>");
    
    console.log(req);
});

app.get("/home",function(req, res){
    res.send("<h1>Hello this is home page</h1>");
    
    console.log(req);
});

app.get("/hobbies",function(req, res){
    res.send("<h1>Hello this is hobbies page!</h1>");
    
    console.log(req);
});

app.listen(3000,function(){
    console.log("Server is created on port no. 3000");
});

