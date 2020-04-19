import {createStore} from 'redux';

let store = createStore(tweetsReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(action);
store.dispatch(action2);

// Actions
let action = {
    type: 'ADD_TWEET',
    tweet: {
        title: 'Test',
        description: 'Lorem Ipsum...'
    }
}

let action2 = {
    type: 'SET_TWEETS',
    tweetsList: [
        {
            title: 'Test',
            description: 'Lorem Ipsum...'
        },
        {
            title: 'Another Test',
            description: 'Another Lorem Ipsum...'
        }
    ]
}

// Reducers

let tweetsReducer = function(state = [],action){

    switch (action.type) {
        case 'ADD_TWEET':
            return [...state,action.tweet];
        case 'SET_TWEETS':
            return action.tweetsList;
        default:
            return state;
    }
}

// Reducers - big no no!
let tweetsReducer2 = function(state = [],action){
    switch (action.type) {
        case 'ADD_TWEET':
            state.tweetsList.push(action.tweet);
        case 'SET_TWEETS':
            state.tweetsList = action.tweetsList;
            return newState;
        default:
            return state;
    }
}


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import store from '../path/to/store';
import axios from 'axios';

const TweetsList = (props) => {
  
    useEffect(()=> {
        store.dispatch({
            type: 'ADD_TWEET',
            tweet: {title: 'test title', description: 'test description to read'}
        })
    },[]);

    return (
        <div>
            {props.tweets.map(item => {
                return <div>item.title</div>;
            })}
        </div>
    )
}

const mapStateToProps = (store) => {
  return {
    tweets: store
  };
}

export default connect(mapStateToProps)(TweetsList);