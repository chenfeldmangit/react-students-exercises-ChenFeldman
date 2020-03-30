import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

class LiveExampleLifeCycle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:'gong!'
    };
    setTimeout(()=>{
      this.setState({value:'test'});
    },5000);
  }

  shouldComponentUpdate(nextProps,nextState){
  }

  componentDidMount(){
  }

  componentDidUpdate(prevProps,prevState){
  }

  render(){
    return (
      <>
        <div>Life Cycle Method Live Code</div>
        <div>{this.props.name}</div>
      </>
    );
  }
  
}

const userType = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.number
})

LiveExampleLifeCycle.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string.isRequired,
  gender: PropTypes.number,
  userData: userType.isRequired
}

LiveExampleLifeCycle.defaultProps = {
  name: "Test",
  about: "About Me",
  gender: 2
}

export default LiveExampleLifeCycle;
