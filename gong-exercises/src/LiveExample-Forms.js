import React from 'react';
import './App.css';

class LiveExampleForms extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      about:'',
      gender:''
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(event){
    console.log(`Calling handle change with values ${event.target.name} ${event.target.value}`);
    this.setState({[event.target.name]: event.target.value});  
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state);
  }

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleFieldChange}></input>
          {this.state.name !== '' ? "V" : "X"}
          <label htmlFor="name">About Me:</label>
          <textarea value={this.state.about} name="about" onChange={this.handleFieldChange}></textarea>
          {this.state.about !== '' ? "V" : "X"}
          <select value={this.state.gender} name="gender" onChange={this.handleFieldChange}>
            <option>Male</option>
            <option>Female</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
  
}

export default LiveExampleForms;
