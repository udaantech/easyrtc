var express = require('express')
  , http = require('http'),
  	io   = require("socket.io"),
  	easyrtc = require("easyrtc"); 


var app = express(); 
var server = http.createServer(app);

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/static/"));

app.listen(port);



var socketServer = io.listen(server, {"log level":1});

// Start EasyRTC server
var rtc = easyrtc.listen(app, socketServer);