/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({
  handleForm: function(e){
    e.preventDefault();
    var newItem ={
      title: this.refs.title.value,
      description: this.refs.desc.value,
      voteCount: 0
    };
    this.refs.feedForm.reset();
    this.props.onNewItem(newItem);
  },
  render: function(){
    var display= this.props.displayed ? 'block' : 'none';
    var styles = {
      display: display
    };
    return (
      <form ref="feedForm" style={styles} id="feedform" className = "container" onSubmit={this.handleForm}>
        <div className ="form-group">
          <input ref="title" type="text" className ="form-control" placeholder="title" />
          <input ref="desc" type="text" className ="form-control" placeholder="description" />
          <button type="submit" className="btn btn-primary btn-block"> add</button>
        </div>
      </form>
      
      );
  }
});

module.exports = FeedForm;