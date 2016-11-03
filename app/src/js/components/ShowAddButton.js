/** @jsx React.DOM */
var React = require('react');
var ShowAddButton = require('react');

var FeedItem = React.createClass({

  render: function(){
    return (
      <button className="btn btn-success btn-block"> Create new item  </button>

      
      );
  }
});

module.exports = ShowAddButton;