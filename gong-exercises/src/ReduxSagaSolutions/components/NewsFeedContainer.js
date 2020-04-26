import React from 'react';
import { connect } from 'react-redux';
import TweetStatus from './TweetStatus';
import NewsFeedComponent from './NewsFeedComponent';
import { addTweet, likeTweet } from '../actions/tweetActions';
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const NewsFeedContainer = (props) => {

    return (
        <div id="newsFeedWrapper">
            <TweetStatus tweets={props.tweets} addTweet={props.addTweet} />
            <NewsFeedComponent tweets={props.tweets} likeTweet={props.likeTweet} />
            <ClipLoader
                size={150}
                color={"#123abc"}
                loading={props.loading}
            />
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        tweets: store.tweets.tweetsList,
        loading: store.app.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTweet: tweet => { addTweet(dispatch, tweet) },
        likeTweet: tweetId => { likeTweet(dispatch, tweetId) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsFeedContainer);
