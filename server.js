// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// This is also throwing an error about not finding a module
// var friends = require("./app/data/friends.js")

// Sets up the Express App
// =============================================================
var app = express();
// app.use(express.static('public'))
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());



// These throw an error, can't find module?
var apiRoutes = require("./app/routing/apiRoutes")(app);
var htmlRoutes = require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
