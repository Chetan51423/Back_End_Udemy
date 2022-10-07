const { response } = require("express");
const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extented: true}));

app.get("/",function(req,res){
    //res.sendFile("index.html");      this can be the commond to send the perticular file in response
    res.sendFile(__dirname + "/index.html")
    
});

app.post("/", function(req, res){

    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    console.log(num1);
    console.log(num2);
    
    var result= num1+num2;
    //console.log(result);

    res.send("The result of the calculation is " + result); 
});

app.listen(3000,function(){
    console.log("Your server is created at port no: 3000");

});
