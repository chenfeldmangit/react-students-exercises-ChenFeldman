import React, { useState } from 'react';

export default function NotificationItem(props) {

    return (
        <div class="item">
            <div class="userProfile">
                <div class="image"></div>
                <div class="name">{props.name}</div>
            </div>
            <div class="content">
                {props.description}
            </div>
        </div>
    )
}