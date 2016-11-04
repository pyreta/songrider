import { connect } from 'react-redux';
import { addNote, removeNote, updateMidiInputs, updateMidiDevice, loadKeys } from '../actions/note_actions';
import Test from '../components/test';
const WebMidi = require('../utils/webmidi.min.js');
window.WebMidi = WebMidi;
// setInterval(() => {
//   console.log(store.getState().inputs);
//   console.log("DEVICE");
//   console.log(store.getState().device);
//   store.dispatch(updateMidiInputs(WebMidi.inputs));
//   if (store.getState().inputs.indexOf(store.getState().device) === -1){
//     store.dispatch(updateMidiDevice(WebMidi.inputs[WebMidi.inputs.length-1]));
//   }
// }, 1000);



const playNote = (e) => {
  // console.log(e.note.number);
  // let note = store.getState().keys[e.note.number];
  let path = store.getState().keys[e.note.number].path;
  let note = new Audio(path);
  store.getState().keys[e.note.number].tag = note;
  let volume = e.velocity;
  // note.loop = true;
  note.currentTime = 0; note.volume = volume; note.play();
  // setInterval(()=>{note.currentTime=1}, 1000);
};

const stopNote = (e) => {
  // console.log(e.note.number);
  let note = store.getState().keys[e.note.number].tag;
  // note.pause();
  if (note) fadeNote(note);
  // note.loop = false;
};

const fadeNote = (note) => {
  // console.log("FADE");
  let fadeInterval = setInterval(()=>{
    let volume = note.volume - 0.01;
    if (volume < 0) volume = 0;
    note.volume = volume;
    if (note.volume <= 0) clearInterval(fadeInterval);
  }, 0.25);
  // while(note.volume > 0){
  //   setTimeout(()=>{
  //     console.log(note.volume);
  //     note.volume -= 0.5;
  //   }, 10);
  // }
};

const connectMidiDevice = () => {
  if (WebMidi.inputs[0]) {
    WebMidi.inputs.forEach((input)=>{
      console.log(`${input.manufacturer} ${input.name} Found!`);
      input.addListener('noteon', "all",
        (e) => {
          playNote(e);
          store.dispatch(addNote({note:e.note.name, octave:e.note.octave}));
        }
      );
      input.addListener('pitchbend', "all", (e)=> {
          console.log("Pitch value: " + e.value);
      });
      input.addListener('noteoff', "all",
        (e) => {
          // console.log(e);
          stopNote(e);
          store.dispatch(removeNote(e.note.name+e.note.octave));
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
  loadKeys: instrument => dispatch(loadKeys(instrument)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
