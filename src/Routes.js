import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ InfiniteScrollPage } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
