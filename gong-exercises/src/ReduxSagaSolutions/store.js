import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tweetsReducer from './reducers/tweetsReducer';
import notificationsReducer from './reducers/notificationsReducer';
import appReducer from './reducers/appReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const combinedReducers = combineReducers({
    tweets: tweetsReducer,
    notifications: notificationsReducer,
    app: appReducer
});

// const middlewares = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combinedReducers,composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;     