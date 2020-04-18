import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TweetStatus from './TweetStatus';
import NewsFeedComponent from './NewsFeedComponent';
import { addTweet, setTweets } from '../actions/tweetActions';
import TweetAPI from '../common/TweetAPI';

const NewsFeedContainer = (props) => {

    useEffect(() => {
        const getTweets = async () => {
            const tweets = await TweetAPI.getTweets();
            props.setTweets(tweets);
        }
        getTweets();
    }, [])

    return (
        <div id="newsFeedWrapper">
            <TweetStatus tweets={props.tweets} addTweet={props.addTweet} />
            <NewsFeedComponent tweets={props.tweets} />
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        tweets: store.tweets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTweet: tweet => {
            TweetAPI.addTweet(tweet);
            dispatch(addTweet(tweet));
        },
        setTweets: tweets => dispatch(setTweets(tweets))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeedContainer);
