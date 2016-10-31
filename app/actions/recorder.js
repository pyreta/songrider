// @flow
export const CHANGE_INSTRUMENT = 'CHANGE_INSTRUMENT';
export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const CLEAR_NOTES = 'CLEAR_NOTES';

export function changeInstrument(instrument) {
  return {
    type: CHANGE_INSTRUMENT,
    instrument
  };

}

export function removeNote(note) {
  return {
    type: REMOVE_NOTE,
    note
  };
}

export function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  };
}

export function clearNotes() {
  return {
    type: CLEAR_NOTES,
  };
}
