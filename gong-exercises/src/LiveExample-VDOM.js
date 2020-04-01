import React from 'react';
import './App.css';

class LiveExampleVDOM extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweets: [{id: 0, title:'Tweet'},{id: 1, title:'Tweet2'},{id: 2, title:'Tweet3'},{id: 3, title:'Tweet4'},]};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let newTweets = this.state.tweets;
    newTweets.splice(0,1);
    this.setState({tweets:newTweets});
  }

  render(){
    return (
      <>
        {this.state.tweets.map(item => {return <TweetItem key={item.id} title={item.title}/>})}    
        <button onClick={this.handleClick}>Render!</button>
      </>
    );
  }
}

export default LiveExampleVDOM;


class TweetItem extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(`Rendering tweet ${this.props.title}`);
    return (<div>{this.props.title}</div>);
  }
}
