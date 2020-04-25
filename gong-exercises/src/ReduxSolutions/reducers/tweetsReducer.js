import { TweetActions } from "../common/Actions";

const initialState = {
    tweetsList: []
};

export default function tweetsReducer(state = initialState, action) {
    switch (action.type) {
        case TweetActions.ADD_TWEET_SUCCESS:
            return { ...state, tweetsList: [...state.tweetsList, action.tweet] }
        case TweetActions.SET_TWEETS_SUCCESS:
            return { ...state, tweetsList: action.tweets }
        case TweetActions.LIKE_TWEET_SUCCESS:
            let itemIndex = state.tweetsList.findIndex((item => item.id === action.tweetId));
            let tweetsList = [...state.tweetsList]; 
            tweetsList[itemIndex].liked = true;
            return {...state, tweetsList};
        default:
            return state;
    }
}