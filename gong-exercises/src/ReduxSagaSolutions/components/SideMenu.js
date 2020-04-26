import React from 'react';
import GongButton from './GongButton';
import MenuItem from './MenuItem';
import {connect} from 'react-redux';

function SideMenu(props) {

    return (
        <div id="sideMenu">
            <MenuItem title="Home" link="/" />
            <MenuItem title="Profile" link="/profile" />
            <MenuItem title="Notifications" link="/notifications" badge={props.notificationsCount} />
            <GongButton title="Tweet" />
        </div>
    )
}


export default SideMenu;