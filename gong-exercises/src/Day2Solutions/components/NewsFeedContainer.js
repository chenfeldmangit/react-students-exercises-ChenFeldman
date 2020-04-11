import React, { useState, useEffect } from 'react';
import TweetStatus from './TweetStatus';
import TweetAPI from '../common/TweetAPI';
import NewsFeedComponent from './NewsFeedComponent';

export default function NewsFeedContainer(props) {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        TweetAPI.getTweets()
            .then(result => {
                setTweets(result);
            })
            .catch(err => {
                console.log(`Error while getting tweets: ${err}`);
            })
    }, [tweets])

    return (
        <div id="newsFeedWrapper">
            <TweetStatus />
            <NewsFeedComponent tweets={tweets}/>
        </div>
    )
}