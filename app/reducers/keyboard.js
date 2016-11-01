import { ADD_NOTE } from '../actions/note_actions';

let defaultState = { notes: [] };

const keyboard = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE:
        return {
          notes:[action.note,...oldState.notes]
        };
    default: return oldState;
  }
};

export default keyboard;
