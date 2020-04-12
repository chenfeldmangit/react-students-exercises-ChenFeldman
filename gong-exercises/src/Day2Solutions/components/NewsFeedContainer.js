import React, { useState, useEffect } from 'react';
import TweetStatus from './TweetStatus';
import NewsFeedComponent from './NewsFeedComponent';
import useLocalStorage from '../../Hooks-Live-Examples/useLocalStorage';

export default function NewsFeedContainer(props) {
    const [tweets,setTweets] = useLocalStorage('tweets',[]);

    return (
        <div id="newsFeedWrapper">
            <TweetStatus tweets={tweets} setTweets={setTweets} />
            <NewsFeedComponent tweets={tweets}/>
        </div>
    )
}