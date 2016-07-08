var React = require('react');
var ReactDOM = require('react-dom')

var CommentBox = require('./components/comment_box');
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"},
  {id: 3, author: "William Blake", text: "Are you familiar with my poetry?"}
];

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
