import {createStore, combineReducers} from 'redux';
import tweetsReducer from './reducers/tweetsReducer';
import notificationsReducer from './reducers/notificationsReducer';

const combinedReducers = combineReducers({
    tweets: tweetsReducer,
    notifications: notificationsReducer
});

const store = createStore(combinedReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;