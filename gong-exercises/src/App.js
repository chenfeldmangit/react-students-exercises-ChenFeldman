import React from 'react';
import './ReduxSolutions/styles/style.scss';
import SideMenu from './ReduxSolutions/components/SideMenu';
import NewsFeedContainer from './ReduxSolutions/components/NewsFeedContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserProfile from './ReduxSolutions/components/UserProfile';
import NotificationsContainer from './ReduxSolutions/components/NotificationsContainer';
import PageNotFound from './ReduxSolutions/components/PageNotFound';

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
