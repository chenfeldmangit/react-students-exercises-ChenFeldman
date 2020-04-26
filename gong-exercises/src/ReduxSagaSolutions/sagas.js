import { put, takeEvery, takeLatest,all,fork,call } from 'redux-saga/effects';
import TwitterAPI from './common/TweetAPI';
import { TweetActions, NotificationsActions } from './common/Actions';

function* setTweets() {
    try {
        const tweets = yield TwitterAPI.getTweets();
        yield put({ type: TweetActions.SET_TWEETS_SUCCESS, tweets });
    }
    catch (err) {
        yield put({ type: TweetActions.SET_TWEETS_FAILED });
    }
}

function* watchSetTweets() {
    yield takeLatest(TweetActions.SET_TWEETS, setTweets);
}

function* addTweet(action) {
    try {
        yield call(TwitterAPI.addTweet,action.tweet);
        yield put({ type: TweetActions.ADD_TWEET_SUCCESS, tweet: action.tweet });
    }
    catch (err) {
        console.log(`addTweet error ${err}`);
        yield put({ type: TweetActions.ADD_TWEET_FAILED });
    }
}

function* watchAddTweet() {
    yield takeEvery(TweetActions.ADD_TWEET, addTweet);
}

function* likeTweet(action) {
    try {
        yield call(TwitterAPI.likeTweet,action.tweetId);
        yield put({ type: TweetActions.LIKE_TWEET_SUCCESS, tweetId: action.tweetId });
    }
    catch (err) {
        console.log(`like tweet error ${err}`);
        yield put({ type: TweetActions.LIKE_TWEET_FAILED });
    }
}

function* watchLikeTweet() {
    yield takeEvery(TweetActions.LIKE_TWEET, likeTweet);
    yield takeEvery(TweetActions.LIKE_TWEET, addNotification);
}

function* addNotification(tweetId) {
    try {
        debugger;
        let notification = {id: tweetId, name: 'test',description: 'test description'}
        yield call(TwitterAPI.addNotification,notification);
        yield put({ type: NotificationsActions.ADD_NOTIFICATION_SUCCESS, notification});
    }
    catch (err) {
        yield put({ type: NotificationsActions.ADD_NOTIFICATION_FAILED });
    }
}

function* setNotifications() {
    try {
        const notifications = yield call(TwitterAPI.getNotifications);
        yield put({ type: NotificationsActions.SET_NOTIFICATIONS_SUCCESS, notifications });
    }
    catch (err) {
        yield put({ type: NotificationsActions.SET_NOTIFICATIONS_FAILED });
    }
}

function* watchSetNotifications() {
    yield takeEvery(NotificationsActions.SET_NOTIFICATIONS, setNotifications);
}

export default function* rootSaga() {
    yield all([
        watchAddTweet(),
        watchSetTweets(),
        watchLikeTweet(),
        watchSetNotifications()
    ]);
}