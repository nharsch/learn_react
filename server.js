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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

var router = express.Router();

router.route('/comments/')
  .get( function(req, res) {
    res.json(test_data);
  })
  .post(function(req, res) {
      // functional way
      // var res_obj = test_data.concat(req.body);
      // console.log(res_obj);
      // res.json(res_obj);
      //
      // stateful way
      test_data.push(req.body);
      console.dir(test_data);
      res.json(test_data);
  
  });

app.use('/api', router)

app.listen(3000, function () {
  console.log('React app listening on port 3000');
});
