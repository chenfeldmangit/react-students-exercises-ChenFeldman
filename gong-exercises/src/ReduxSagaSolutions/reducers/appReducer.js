import { TweetActions, NotificationsActions } from "../common/Actions";

const initialState = {
    loading: false,
    notificationsCount: 0
};

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case TweetActions.ADD_TWEET:
            return { ...state, loading: true };
        case TweetActions.ADD_TWEET_SUCCESS:
        case TweetActions.ADD_TWEET_FAILED:
            return { ...state, loading: false };
        case TweetActions.SET_TWEETS:
            return { ...state, loading: true };
        case TweetActions.SET_TWEETS_SUCCESS:
        case TweetActions.SET_TWEETS_FAILED:
            return { ...state, loading: false };
        case NotificationsActions.SET_NOTIFICATIONS_SUCCESS:
            return { loading: false,notificationsCount:action.notifications.length };
        default:
            return state;
    }
}