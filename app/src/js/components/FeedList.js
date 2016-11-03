/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');



var FeedList = React.createClass({

  render: function(){
    var feeditems = this.props.items.map(function(item){
      return <FeedItem title={item.description} desc = {item.description} />
    });

    return (
      <ul className="list-group">
        {feeditems}
      </ul>
      );
  }
});

module.exports = FeedList;