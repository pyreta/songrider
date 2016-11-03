import { ADD_NOTE, REMOVE_NOTE, UPDATE_INPUTS, UPDATE_DEVICE, LOAD_KEYS } from '../actions/note_actions';

let defaultState = { notes: [], inputs: [], device: null, keys: [] };

const removeFromArray = (array, el) => {
  let idx = array.indexOf(el);
  if (idx === -1) {
    return array;
  } else {
    return [
        ...array.slice(0, idx),
        ...array.slice(idx + 1)
    ];
  }
};

const keyboard = (oldState = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE:
        return {
          notes:[action.note,...oldState.notes],
          inputs: oldState.inputs,
          keys: oldState.keys,
          device: oldState.device
        };
    case REMOVE_NOTE:
        return {
          notes: removeFromArray(oldState.notes, action.note),
          inputs: oldState.inputs,
          keys: oldState.keys,
          device: oldState.device
        };
    case UPDATE_INPUTS:
        return {
          notes: oldState.notes,
          inputs: action.inputs,
          keys: oldState.keys,
          device: oldState.device
        };
    case UPDATE_DEVICE:
        return {
          notes: oldState.notes,
          inputs: oldState.inputs,
          keys: oldState.keys,
          device: action.device
        };
    case LOAD_KEYS:
        return {
          notes: oldState.notes,
          inputs: oldState.inputs,
          keys: action.keys,
          device: oldState.device
        };
    default: return oldState;
  }
};

export default keyboard;
