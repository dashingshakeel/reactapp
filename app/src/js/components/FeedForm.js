/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({

  render: function(){
    return (
      <form className = "container">
        <div className ="form-group">
          <input type="text" className ="form-control" placeholder="title" />
          <input type="text" className ="form-control" placeholder="description" />
          <button type="submit" className="btn btn-primary btn-block"> add</button>
        </div>
      </form>
      
      );
  }
});

module.exports = FeedForm;