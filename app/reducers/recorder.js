// @flow
import { CHANGE_INSTRUMENT, ADD_NOTE, CLEAR_NOTES, REMOVE_NOTE } from '../actions/recorder';

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
    case REMOVE_NOTE:
        const idx = oldState.notes.indexOf(action.note);
        if (idx !== -1) {
            return {
              instrument: oldState.instrument,
              notes: [
                ...oldState.notes.slice(0, idx),
                ...oldState.notes.slice(idx + 1)
              ]
            };
        }
        return oldState; // if action.fruit is not in state, return previous state
    case CLEAR_NOTES:
      return {
        instrument: oldState.instrument,
        notes: []
      };
    default:
      return oldState;
  }
};
