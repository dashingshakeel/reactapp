/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList');

var Feed = React.createClass({

  getInitialState: function(){
    var FEED_ITEMS =[
      {key: '1', title: 'realtime adata', description: 'firebase is cool',voteCount: 49},
      {key: '2', title: 'realtime not adata', description: 'firebas',voteCount: 34},
      {key: '3', title: 'realtime yes adata', description: 'is cool',voteCount: 15}
    ];
    return {
      items: FEED_ITEMS
    }
  },

  render: function(){

    return (
      <div>
        <div className="container">
          <ShowAddButton/>
        
        </div>
        <FeedForm />
        <br />
        <br />
        <FeedList items={this.state.items}/>
      </div>
      );
  }
});

module.exports = Feed;