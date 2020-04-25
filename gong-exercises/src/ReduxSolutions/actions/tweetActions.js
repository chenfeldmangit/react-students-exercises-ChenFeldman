import { TweetActions } from "../common/Actions"
import TweetAPI from "../common/TweetAPI";

function addTweetRequest() {
    return {
        type: TweetActions.ADD_TWEET
    }
}

function addTweetSuccess(tweet) {
    return {
        type: TweetActions.ADD_TWEET_SUCCESS,
        tweet
    }
}

function addTweetFailed() {
    return {
        type: TweetActions.ADD_TWEET_FAILED,
    }
}

export function addTweet(dispatch, tweet) {
    dispatch(addTweetRequest());
    TweetAPI.addTweet(tweet)
        .then(() => {
            dispatch(addTweetSuccess(tweet));
        })
        .catch(err => {
            dispatch(addTweetFailed());
        });
}

export function likeTweet(dispatch, tweetId) {
    dispatch(likeTweetRequest());
    TweetAPI.likeTweet(tweetId)
        .then(() => {
            dispatch(likeTweetSuccess(tweetId));
        })
        .catch(err => {
            dispatch(likeTweetFailed());
        });
}

export function likeTweetRequest() {
    return {
        type: TweetActions.LIKE_TWEET
    }
}

export function likeTweetSuccess(tweetId) {
    return {
        type: TweetActions.LIKE_TWEET_SUCCESS,
        tweetId
    }
}

export function likeTweetFailed() {
    return {
        type: TweetActions.LIKE_TWEET_FAILED,
    }
}

export function setTweets(dispatch, tweets) {
    dispatch(setTweetsRequest());
    // Simulate loading time
    setTimeout(()=> {
        dispatch(setTweetsSuccess(tweets));
    },3000);
}

function setTweetsRequest() {
    return {
        type: TweetActions.SET_TWEETS
    }
}

function setTweetsSuccess(tweets) {
    return {
        type: TweetActions.SET_TWEETS_SUCCESS,
        tweets
    }
}

function setTweetsFailed() {
    return {
        type: TweetActions.SET_TWEETS_FAILED,
    }
}


