import React from 'react';
import './Day2Solutions/styles/style.scss';
import SideMenu from './Day2Solutions/components/SideMenu';
import NewsFeedContainer from './Day2Solutions/components/NewsFeedContainer';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import UserProfile from './Day2Solutions/components/UserProfile';
import NotificationsContainer from './Day2Solutions/components/NotificationsContainer';
import PageNotFound from './Day2Solutions/components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideMenu />
        <Switch>
          <Route path="/" component={() => <NewsFeedContainer/>} exact/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/notifications" component={NotificationsContainer}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
