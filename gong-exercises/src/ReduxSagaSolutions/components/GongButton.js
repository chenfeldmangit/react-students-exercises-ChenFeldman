import React from 'react';

export default function GongButton(props){

    return (
        <div className="gongButton tweet" onClick={props.action}>{props.title}</div>
    )
}