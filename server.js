//require dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//set up port
var PORT = process.env.PORT || 3000;

//instantiate our Express App
var app = express();

//express router
var router = express.Router();

//require routes file
require("./config/routes")(router);

//designate our public folder as static
app.use(express.static(__dirname + "/public"));

//connect Handlebars to app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//bodyparser
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

//localhost database, change when deployed
var db = process.env.MONGODB.URI || "mongodb://localhost/mongoHeadlines";

//connect to db
mongoose.connect(db, function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log("mongoose connection is successful");
    }
});

//listen on port
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});