import React from 'react';
import NewsFeedItem from './NewsFeedItem';

export default function NotificationsComponent(props) {
    return (
        <div id="newsFeed">
            {props.notifications.map((item) => {
                return <NewsFeedItem data={item} />
            })}
        </div>
    )
}