
const ADD_TWEET = 'ADD_TWEET';
const LIKE_TWEET = 'LIKE_TWEET';
const SET_TWEETS = 'SET_TWEETS';

const initialState = [];

export default function tweetsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TWEET:
            return [...state, action.tweet];
        case SET_TWEETS:
            return [...action.tweets];            
        case LIKE_TWEET:
            break;
        default:
            return state;
    }
}