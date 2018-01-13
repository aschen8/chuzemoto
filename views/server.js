//req dependences
var express = require("express");

//set up port to either the host's designated port or 3000
var PORT = process.env.PORT || 3000;

//instantiate express app
var app = express();

//set up express router
var router= express.Router();

//Designate public folder as static directory
app.use(express.static(_dirname + "/public"));

//Have every request go through our router middleware
app.use(router);

//listen on the port
app.listen(PORT, funciton(){
	console.log("listening on port:" + PORT");

});

