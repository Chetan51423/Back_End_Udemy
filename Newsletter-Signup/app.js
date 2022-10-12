const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(express.static("public"))   // we have use this function to make use of static files in our html like css.

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
   res.sendFile(__dirname + "/signup.html");
   console.log("hello Chetan")
});

app.post("/",function(req,res){

     var FName = req.body.fname;
     var LName = req.body.lname;
     var Email = req.body.email;
    
     
     console.log(FName);
     
     console.log(Email);
     console.log(LName);
     

});

app.listen(3000,function(req, res){
     console.log("The server is running on port no. 3000");
});

//api key:-     4034ce183fecb8b76128b135a6f3a772-us21
