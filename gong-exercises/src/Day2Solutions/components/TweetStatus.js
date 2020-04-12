import React, {useState} from 'react';
import GongButton from './GongButton';

export default function TweetStatus(props) {
    const [status,setStatus] = useState("What's Happening?");

    const handleAddTweetItem = () => {
        let newTweet = { id: 5 ,name: 'Chenos', description: status };
        props.setTweets([...props.tweets, newTweet]);
        setStatus('');
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div id="tweetWrapper">
            <div class="content">
                <div class="profileImage"></div>
                <div class="textUpdate">
                    <textarea class="content" onChange={handleStatusChange} value={status}></textarea>
                </div>
            </div>
            <div class="actions">
                <div class="tweetType">
                    <div class="icon">Image</div>
                    <div class="icon">Gif</div>
                    <div class="icon">Poll</div>
                </div>
                <GongButton title="Tweet" action={handleAddTweetItem} />
            </div>
        </div>
    )
}