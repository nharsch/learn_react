var React = require('react');
var ReactDOM = require('react-dom')

var CommentBox = require('./components/comment_box');

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
