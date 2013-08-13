var express = require('express');

var app = express.createServer(express.logger());
// var fs = require('fs');

// fs.readFile('./index.html', function(error, content) {
// });

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
