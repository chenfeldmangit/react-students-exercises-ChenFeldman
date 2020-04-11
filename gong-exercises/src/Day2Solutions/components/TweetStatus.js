import React, {useState} from 'react';
import GongButton from './GongButton';
import TweetAPI from '../common/TweetAPI';

export default function TweetStatus() {
    const [status,setStatus] = useState("What's Happening?");

    const handleAddTweetItem = () => {
        TweetAPI.addTweet({ name: 'Chenos', description: status });
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