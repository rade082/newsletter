//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/signup.html");
})

app.post("/",function(req ,res){

  var first =req.body.fname;
  var last = req.body.lname;
  var email= req.body.email;

  console.log( first , last ,email);
})
app.listen(3000,function(){
  console.log("The server has started on port 3000");
});
