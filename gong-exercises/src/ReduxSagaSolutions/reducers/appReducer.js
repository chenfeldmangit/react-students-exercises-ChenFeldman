import { TweetActions, NotificationsActions } from "../common/Actions";

const initialState = {
    loading: false
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case TweetActions.ADD_TWEET:
            return { loading: true };
        case TweetActions.ADD_TWEET_SUCCESS:
        case TweetActions.ADD_TWEET_FAILED:
            return { loading: false };
        case TweetActions.SET_TWEETS:
            return { loading: true };
        case TweetActions.SET_TWEETS_SUCCESS:
        case TweetActions.SET_TWEETS_FAILED:
            return { loading: false };
        default:
            return state;
    }
}