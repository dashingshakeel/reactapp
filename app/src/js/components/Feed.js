/** @jsx React.DOM */

var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList'),
    _ = require('lodash');

var Feed = React.createClass({

  getInitialState: function(){
    var FEED_ITEMS =[
      { title: 'realtime adata',id: 1, description: 'firebase is cool',voteCount: 49},
      { title: 'realtime not adata',id: 2, description: 'firebas',voteCount: 34},
      {title: 'realtime yes adata', id: 3, description: 'is cool',voteCount: 15},
    ];
    return {
      items: FEED_ITEMS,
      formDisplayed: false
    }
  },
  onToggleForm: function(){
    this.setState({
      formDisplayed: !this.state.formDisplayed
    });
  },

  onNewItem: function(newItem){
    var newItems = this.state.items.concat([newItem]);
    this.setState({
      items: newItems,
      formDisplayed: false,
      id: this.state.items.length
    });
  },

  onVote: function(item){
    var items = _.uniq(this.state.items);
    var index = _.findIndex(items, function(feedItems){
      return feedItems.id === item.id;

    });
    var oldObj = items[index];
    var newItems = _.pull(items, oldObj);
    newItems.push(item);
    this.setState({
      items: newItems
    });
  },

  render: function(){

    return (
      <div>

        <div className="container">
          <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm}/>
        </div>

        <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem}/>
        <br />
        <br />
        <FeedList  items={this.state.items} onVote={this.onVote}/>
        
      </div>
      );
  }
});

module.exports = Feed;