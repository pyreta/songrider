// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import RecorderContainer from './containers/RecorderContainer';
import CounterPage from './containers/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={RecorderContainer} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
