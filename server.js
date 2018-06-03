var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// http://openmymind.net/NodeJS-Module-Exports-And-Organizing-Express-Routes/

var app = express();
// var PORT = process.env.PORT || 3000;
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});