import React from 'react';
import './ReduxSagaSolutions/styles/style.scss';
import SideMenu from './ReduxSagaSolutions/components/SideMenu';
import NewsFeedContainer from './ReduxSagaSolutions/components/NewsFeedContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserProfile from './ReduxSagaSolutions/components/UserProfile';
import NotificationsContainer from './ReduxSagaSolutions/components/NotificationsContainer';
import PageNotFound from './ReduxSagaSolutions/components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideMenu />
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

export default App;
