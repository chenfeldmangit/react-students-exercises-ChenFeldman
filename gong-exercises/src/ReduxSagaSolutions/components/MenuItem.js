import React from 'react';
import {Link} from 'react-router-dom';

export default function MenuItem(props) {
    return (
        <Link to={props.link}>
            <div className="menuItem">
                <div className="icon profile">
                </div>
                <span className="title">{props.title}</span>
                {props.badge && <span className="title"> ({props.badge})</span>}
            </div>
        </Link>
    )
}