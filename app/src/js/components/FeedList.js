/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');



var FeedList = React.createClass({

  render: function(){
    var feedItems = this.props.items.map(function(item){
      return <FeedItem 
                       id={item.id}
                       desc={item.description}
                       title={item.title}
                       voteCount={item.voteCount}
                       onVote={this.props.onVote} />

    }.bind(this));
    return (
      <div className="container">
      <ul className="list-group">
      {feedItems}
      </ul>
      </div>
    );
  }
});

module.exports = FeedList;