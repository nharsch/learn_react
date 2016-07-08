var React = require('react');
var ReactDOM = require('react-dom')

var CommentBox = require('./components/comment_box');

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />, 
  document.getElementById('content')
);
