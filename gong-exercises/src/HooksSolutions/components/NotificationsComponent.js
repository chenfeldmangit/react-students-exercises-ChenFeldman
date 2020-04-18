import React from 'react';
import NewsFeedItem from './NewsFeedItem';

export default function NotificationsComponent(props) {

    return (
        <div id="newsFeed">
            {props.notifications.map((item, index) => {
                return <NewsFeedItem id={index} name={item.userName} description={item.description} />
            })}
        </div>
    )
}