import React, { useEffect } from 'react';
import './ReduxSagaSolutions/styles/style.scss';
import SideMenu from './ReduxSagaSolutions/components/SideMenu';
import NewsFeedContainer from './ReduxSagaSolutions/components/NewsFeedContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserProfile from './ReduxSagaSolutions/components/UserProfile';
import NotificationsContainer from './ReduxSagaSolutions/components/NotificationsContainer';
import PageNotFound from './ReduxSagaSolutions/components/PageNotFound';
import { setNotifications } from './ReduxSagaSolutions/actions/notificationsActions';
import { setTweets } from './ReduxSagaSolutions/actions/tweetActions';
import { connect } from 'react-redux';

function App(props) {

  useEffect(() => {
    props.setTweets();
    props.setNotifications();
  }, [])

  return (
    <BrowserRouter>
      <div className="container">
        <SideMenu notificationsCount={props.notificationsCount} />
        <Switch>
          <Route path="/" component={() => <NewsFeedContainer />} exact />
          <Route path="/profile" component={UserProfile} />
          <Route path="/notifications" component={NotificationsContainer} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

const mapStateToProps = (state) => {
  return {
    notificationsCount: state.notifications.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setTweets: tweets => { setTweets(dispatch, tweets) },
    setNotifications: notifications => { setNotifications(dispatch, notifications) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
