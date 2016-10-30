// @flow
import { CHANGE_INSTRUMENT, ADD_NOTE, CLEAR_NOTES } from '../actions/recorder';

const defaultState = {
  instrument: "harp",
  notes: []
};

export default (oldState = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INSTRUMENT:
      return {
        instrument: action.instrument,
        notes: oldState.notes,
      };
    case ADD_NOTE:
      return {
        instrument: oldState.instrument,
        notes: [...oldState.notes, action.note]
      };
    case CLEAR_NOTES:
      return {
        instrument: oldState.instrument,
        notes: []
      };
    default:
      return oldState;
  }
};
