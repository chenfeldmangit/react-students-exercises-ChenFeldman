import React from 'react';
import GongButton from './GongButton';
import MenuItem from './MenuItem';

export default function SideMenu(props) {

    return (
        <div id="sideMenu">
            <MenuItem title="Home" link="/" />
            <MenuItem title="Profile" link="/profile" />
            <MenuItem title="Notifications" link="/notifications" />
            <GongButton title="Tweet" />
        </div>
    )
}