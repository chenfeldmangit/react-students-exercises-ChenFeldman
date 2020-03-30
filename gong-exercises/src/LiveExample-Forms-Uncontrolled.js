import React from 'react';
import './App.css';

class LiveExampleFormsUnControlled extends React.Component {
  constructor(props){
    super(props);

    this.nameInput = React.createRef();
    this.aboutInput = React.createRef();
    this.genderSelect = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.nameInput.current.value);
    alert(this.aboutInput.current.value);
    alert(this.genderSelect.current.value);
  }

  render(){
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name:</label>
          <input type="text" name="name" ref={this.nameInput}></input>
          <label for="name">About Me:</label>
          <textarea name="about" ref={this.aboutInput}></textarea>
          <select name="gender" ref={this.genderSelect}>
            <option>Male</option>
            <option>Female</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
  
}

export default LiveExampleFormsUnControlled;
