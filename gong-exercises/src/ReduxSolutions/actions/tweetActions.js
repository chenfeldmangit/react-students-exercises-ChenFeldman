const ADD_TWEET = 'ADD_TWEET';
const SET_TWEETS = 'SET_TWEETS';

export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function setTweets(tweets) {
    return {
        type: SET_TWEETS,
        tweets
    }
}
