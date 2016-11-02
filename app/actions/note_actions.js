export const ADD_NOTE = "ADD_NOTE";

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
});

export const changeMidiInput = (input) => ({
  type: CHANGE_INPUT,
  input
});
