import React from 'react';
import NewsFeedItem from './NewsFeedItem';
import PropTypes from 'prop-types';

const NewsFeedComponent = (props) => {

    const handleLikeTweet = (tweetId) => {
        props.likeTweet(tweetId);
    }

    return (
        <div id="newsFeed">
            {props.tweets.map((item) => {
                return <NewsFeedItem key={item.id} likeTweet={handleLikeTweet} data={item} />
            })}
        </div>
    )
}

NewsFeedComponent.propTypes = {
    tweets: PropTypes.array.isRequired
}

NewsFeedComponent.defaultProps = {
    tweets: []
}

export default NewsFeedComponent;