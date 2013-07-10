var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

fs.readFile('index.html', function(error, content) {
    if (error) {
	response.writeHead(500);
	response.end();
    }
    else {
	response.writeHead(200, { 'Content-Type': 'text/html' });
	response.end(content, 'utf-8');
    }
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});