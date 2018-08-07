// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var friends = require("../data.friends.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// "Require" is throwing an error, I don't know why
// require("/routing/apiRoutes")(app);
// require("/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  