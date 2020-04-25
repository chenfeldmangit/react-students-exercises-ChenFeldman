import { put, takeEvery, all } from 'redux-saga/effects';
import TwitterAPI from './common/TweetAPI';
import { TweetActions } from './common/Actions';

function* setTweetsAsync() {
    try{
        const tweets = yield TwitterAPI.getTweets();
        yield put({ type: TweetActions.SET_TWEETS_SUCCESS, tweets });
    }
    catch(err){
        yield put({ type: TweetActions.SET_TWEETS_FAILED });
    }
}

function* watchSetTweetsAsync() {
    yield takeEvery(TweetActions.SET_TWEETS, setTweetsAsync);
}

function* addTweetAsync(action) {
    try{
        debugger;
        yield TwitterAPI.addTweet(action.tweet);
        yield put({ type: TweetActions.ADD_TWEET_SUCCESS, tweet: action.tweet });
    }
    catch(err){
        yield put({ type: TweetActions.ADD_TWEET_FAILED });
    }
}

function* watchAddTweetAsync() {
    yield takeEvery(TweetActions.ADD_TWEET, addTweetAsync);
}

function* likeTweetAsync(action) {
    try{
        yield TwitterAPI.likeTweet(action.tweetId);
        yield put({ type: TweetActions.LIKE_TWEET_SUCCESS, tweetId: action.tweetId });
    }
    catch(err){
        yield put({ type: TweetActions.LIKE_TWEET_FAILED });
    }
}

function* watchLikeTweetAsync() {
    yield takeEvery(TweetActions.LIKE_TWEET, likeTweetAsync);
}

export default function* rootSaga() {
    yield all([
        watchAddTweetAsync(),
        watchSetTweetsAsync(),
        watchLikeTweetAsync()
    ])
}