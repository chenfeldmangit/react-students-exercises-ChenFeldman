import { TweetActions } from "../common/Actions"

function addTweetRequest(tweet) {
    return {
        type: TweetActions.ADD_TWEET,
        tweet
    }
}

export function addTweet(dispatch, tweet) {
    dispatch(addTweetRequest(tweet));
}

export function likeTweet(dispatch, tweetId) {
    dispatch(likeTweetRequest(tweetId));
}

export function likeTweetRequest(tweetId) {
    return {
        type: TweetActions.LIKE_TWEET,
        tweetId
    }
}

export function setTweets(dispatch) {
    debugger;
    dispatch(setTweetsRequest());
}

function setTweetsRequest() {
    debugger;
    return {
        type: TweetActions.SET_TWEETS
    }
}

