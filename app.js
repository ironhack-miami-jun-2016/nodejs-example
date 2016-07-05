var kirbyDance = require("kirby-dance");
var express = require("express");
var chalk = require("chalk");


console.log("Hello");

var kirbies = kirbyDance(10);

console.log( chalk.white.bgBlue(kirbies) );




var app = express();

app.set("view engine", "ejs");

app.get("/", function (request, response) {
  response.render("home");
});

app.listen(3000);

console.log("Listening on port 3000")
