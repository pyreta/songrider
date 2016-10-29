// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import recorder from './recorder';

const rootReducer = combineReducers({
  counter,
  recorder,
  routing
});

export default rootReducer;
