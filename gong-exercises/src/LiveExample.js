import React from 'react';
import './App.css';

class LiveExample extends React.Component {
  constructor(props){
    super(props);

    this.myVariable = {color:"green"}
    this.state = {
      color:"blue"
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    console.log('Component mounted!');
  }

  shouldComponentUpdate(nextProps,nextState){

  }

  componentDidUpdate(){
    console.log('Component did update');
    
  }

  handleClick(appName) {
    this.props.handleAppChange(appName);  
  }

  toggleColor = () => {
    if (this.state.color === "blue"){
      this.setState({
        color:"green", 
        title:"test"});
    }
    else{
      this.setState({color:"blue"});
    }
  }

  render(){
    console.log('Component rendered!!!');
    return (
      <>
        <div onClick={this.toggleColor} style={{color:this.state.color}}>
          Toggle Color
        </div>
        <Test handleAppNameChange={this.handleClick} />
      </>
    );
  }
}

export default LiveExample;

class Test extends React.Component {

  handleClick = () => {
    this.props.handleAppNameChange("Params");
  }

  render(){
    return (<div onClick={this.handleClick}>Click My Div</div>);
  }
}
