import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
