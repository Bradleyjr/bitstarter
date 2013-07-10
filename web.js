var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

// fs.readFile('./index.html', function(error, content) {
// });

app.get('/hello.txt', function(req, res){
    res.send('Hello World');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});