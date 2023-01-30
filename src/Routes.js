import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompletePost from './pages/CompletePost';
import Contact from './components/Contact';
import InfiniteScrollPage from './pages/InfiniteScrollPage';
import NotFound from './pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ InfiniteScrollPage } />
      <Route exact path="/contact" component={ Contact } />
      <Route path="/posts/:id" component={ CompletePost } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default Routes;
