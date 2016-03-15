// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');

var jsonData = {count: 12, message: 'hey'};
var PORT = 3000;
var app = express();

// reading the file async then sending data
// var fs = require('fs');
// app.get('/', function(req, res) {
//   fs.readFile('index.html', 'utf8', function(err, data) {
//     res.setHeader('Content-type', 'text/html');
//     res.send(data);
//   });
// });

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html', function(err, data) {
    if(err)
      res.status(500).send(err);
  });
});

app.get('/data', function(req, res) {
  res.json(jsonData);
});

app.listen(PORT, function(){
  console.log('Server is running on port ', PORT);
});
