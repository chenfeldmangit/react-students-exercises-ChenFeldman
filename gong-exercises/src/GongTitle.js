import React from 'react';
import PropTypes from 'prop-types';

class GongTitle extends React.Component {
    
    render(){
        return (
            <>
                <h1 style={{color:this.props.color, fontSize:'70px'}}>{this.props.title}</h1>
                <div>Hello</div>
                <span>Test</span>
            </>
        );
    }
}

GongTitle.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

GongTitle.defaultProps = {
    title: "No Title",
    color: "gray"
}


export default GongTitle;