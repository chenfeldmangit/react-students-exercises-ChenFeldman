import React, {useState} from 'react';
import GongButton from './GongButton';

export default function TweetStatus(props) {
    const [status,setStatus] = useState("What's Happening?");

    const handleAddTweetItem = () => {
        let newTweet = { id: 5 ,name: 'Chenos', description: status };
        props.addTweet(newTweet);
        setStatus('');
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    }

    return (
        <div id="tweetWrapper">
            <div className="content">
                <div className="profileImage"></div>
                <div className="textUpdate">
                    <textarea className="content" onChange={handleStatusChange} value={status}></textarea>
                </div>
            </div>
            <div className="actions">
                <div className="tweetType">
                    <div className="icon">Image</div>
                    <div className="icon">Gif</div>
                    <div className="icon">Poll</div>
                </div>
                <GongButton title="Tweet" action={handleAddTweetItem} />
            </div>
        </div>
    )
}