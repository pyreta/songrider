export const ADD_NOTE = "ADD_NOTE";
export const UPDATE_INPUTS = "UPDATE_INPUTS";
export const UPDATE_DEVICE = "UPDATE_DEVICE";

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
});

export const updateMidiInputs = (inputs) => ({
  type: UPDATE_INPUTS,
  inputs: [...inputs]
});

export const updateMidiDevice = (device) => ({
  type: UPDATE_DEVICE,
  device
});
