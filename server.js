var http = require('http');
var express = require("express");
var app = express();
var controllers = require("./controllers");



app.set("view engine", "vash");

controllers.init(app);

app.get("/foo/bar/", function (req, res) {

	res.send("Testing the functionality");

});

app.get("/test/json", function (req, res) { 

	res.set("Content-type", "application/json");
	res.send({name : "Susee", isValid : true, group : "Admin"});
});
var port = process.env.port || 1337;
var server = http.createServer(app);
server.listen(port);