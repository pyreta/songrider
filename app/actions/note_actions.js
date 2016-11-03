export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_INPUTS = "UPDATE_INPUTS";
export const UPDATE_DEVICE = "UPDATE_DEVICE";
export const LOAD_KEYS = "LOAD_KEYS";

const loadInstrument = instrument => {
  // C-4 to G6
  let keys = [];
  let notes = ["C","Csharp","D","Dsharp","E","F","Fsharp","G","Gsharp","A","Asharp","B"];
  let octave = 1;
  let idx = 60;
  while (octave <= 5){
    notes.forEach((note) => {
      let path = `./samples/${instrument}/${note}${octave}.wav`;
      keys[idx] = new Audio(path);
      idx += 1;
    });
    octave += 1;
  }
  return keys;
};

export const addNote = (note) => ({
  type: ADD_NOTE,
  note
});

export const removeNote = (note) => ({
  type: REMOVE_NOTE,
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

export const loadKeys = (instrument) => ({
  type: LOAD_KEYS,
  keys: loadInstrument(instrument)
});
