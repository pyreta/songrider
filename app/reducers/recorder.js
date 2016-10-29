// @flow
import { CHANGE_INSTRUMENT } from '../actions/recorder';

const defaultState = {
  instrument: "harp"
};

export default (oldState = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case CHANGE_INSTRUMENT:
      return {instrument: action.instrument};
    default:
      return oldState;
  }
};
