import React, { useState, useEffect } from 'react';
import TweetAPI from '../common/TweetAPI';
import NotificationsComponent from './NotificationsComponent';

export default function NotificationsContainer(props) {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        TweetAPI.getNotifications()
            .then(result => {
                setNotifications(result);
            })
            .catch(err => {
                console.log(`Error while getting notifications: ${err}`);
            })
    }, [notifications])

    return (
        <div id="newsFeedWrapper">
            <NotificationsComponent notifications={notifications} />
        </div>
    )
}