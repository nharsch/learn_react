var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var test_data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "William Blake", text: "Are you familiar with my poetry?"},
  {id: 4, author: "Thomas Jefferson", text: "We the people..."}
];

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/comments/', function(req, res, next) {
  res.json(test_data);
  }
)

app.listen(3000, function () {
  console.log('React app listening on port 3000');
});
