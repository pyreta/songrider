import { ADD_NOTE, UPDATE_INPUTS, UPDATE_DEVICE } from '../actions/note_actions';

let defaultState = { notes: [], inputs: [], device: null };

const keyboard = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE:
        return {
          notes:[action.note,...oldState.notes],
          inputs: oldState.inputs,
          device: oldState.device
        };
    case UPDATE_INPUTS:
        return {
          notes: oldState.notes,
          inputs: action.inputs,
          device: oldState.device
        };
    case UPDATE_DEVICE:
        return {
          notes: oldState.notes,
          inputs: oldState.inputs,
          device: action.device
        };
    default: return oldState;
  }
};

export default keyboard;
