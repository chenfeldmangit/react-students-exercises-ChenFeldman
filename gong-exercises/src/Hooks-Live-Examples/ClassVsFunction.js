import React from 'react';

export default class TweetItemC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'blue'
        }
    }

    componentDidMount() {
        // Do some init logic
    }

    render(){
        sreturn (<div onClick={this.setState({color:'orange'})} style={{color:this.state.color}}>Hey {this.props.name}</div>)
    }
}

export default function TweetItemH(props){
    const [color,setColor] = useState('green');

    return (<div onClick={setColor('orange')} style={{color}}>Hey {props.name}</div>)
}