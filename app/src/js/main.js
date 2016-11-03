/** @jsx React.DOM */

var React = require('react'),
    Feed = require('./components/Feed'),
    ReactDOM = require('react-dom');

var app = document.getElementById('app');

ReactDOM.render(<Feed/>, app);