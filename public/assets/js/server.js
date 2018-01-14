//req dependences
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

//set up port to either the host's designated port or 3000
var PORT = process.env.PORT || 3000;

//instantiate express app
var app = express();

//set up express router
var router= express.Router();

//Designate public folder as static directory
app.use(express.static(_dirname + "/public"));

//connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({

}))
//Have every request go through our router middleware
app.use(router);

//listen on the port
app.listen(PORT, function(){
	console.log("listening on port:" + PORT);
});

