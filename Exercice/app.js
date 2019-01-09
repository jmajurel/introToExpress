var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){

  var noise = "";
  var animals = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!"
  }
  var animal = req.params.animal.toLowerCase();
  var noise = animals[animal];
  res.send("<h1>The " + animal + " says '" + noise + "'</h1>");
});

app.get("/repeat/:word/:nb", function(req, res){
  var msg = "";
  for(var i = 0; i < parseInt(req.params.nb); i++) {
    msg += " " + req.params.word;
  }
  res.send(msg);
});

app.get("*", function(req, res){
  res.send("Sorry, page not found... What are you doing with your life?");
});

app.listen(3000, function(){
  console.log("Server running on port 3000");
});
