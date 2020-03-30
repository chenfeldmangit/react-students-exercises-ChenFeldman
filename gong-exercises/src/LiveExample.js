import React from 'react';
import './App.css';

class LiveExample extends React.Component {
  constructor(props){
    super(props);
    this.state = {color:"blue"};
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Click handled');
  }

  toggleColor = () => {
    if (this.state.color === "blue"){
      this.setState({color:"green"});
    }
    else{
      this.setState({color:"blue"});
    }
  }

  render(){
    return (
      <>
        <div onClick={this.toggleColor} style={{color:this.state.color}}>
          Toggle Color
        </div>
        <button onClick={this.handleClick}>Handle Event</button>
        <button onClick={() => this.handleClick(this.state.color)}>Handle Event</button>
      </>
    );
  }
  
}

export default LiveExample;
