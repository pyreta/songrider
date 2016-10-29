// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import RecorderContainer from './containers/RecorderContainer';
import './app.global.css';

const store = configureStore();
window.store = store;
const history = syncHistoryWithStore(hashHistory, store);

render(
  <Provider store={store}>
    <RecorderContainer />
  </Provider>,
  document.getElementById('root')
);
