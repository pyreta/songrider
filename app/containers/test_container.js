import { connect } from 'react-redux';
import { addNote, updateMidiInputs, updateMidiDevice } from '../actions/note_actions';
import Test from '../components/test';
const WebMidi = require('../utils/webmidi.min.js');

// setInterval(() => {
//   console.log(store.getState().inputs);
//   console.log("DEVICE");
//   console.log(store.getState().device);
//   store.dispatch(updateMidiInputs(WebMidi.inputs));
//   if (store.getState().inputs.indexOf(store.getState().device) === -1){
//     store.dispatch(updateMidiDevice(WebMidi.inputs[WebMidi.inputs.length-1]));
//   }
// }, 1000);

const connectMidiDevice = () => {
  if (WebMidi.inputs[0]) {
    WebMidi.inputs.forEach((input)=>{
      console.log(`${input.manufacturer} ${input.name} Found!`);
      input.addListener('noteon', "all",
        (e) => {
          console.log(e.note.name);
          store.dispatch(addNote(e.note.name+e.note.octave));
        }
      );
      input.addListener('pitchbend', "all", (e)=> {
          console.log("Pitch value: " + e.value);
      });
      input.addListener('noteoff', "all",
        (e) => {
          console.log(e);
        }
      );
      input.addListener("controlchange", "all",
        (e) => {
          console.log(e);
        }
      );
    });
  } else {
    console.log("No Device Found");
  }
};

WebMidi.enable((err) => {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
    connectMidiDevice();
  }

});

const mapStateToProps = (state, ownProps) => ({
  notes: state.notes,
  inputs: state.inputs,
  weird: ownProps.weird
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
