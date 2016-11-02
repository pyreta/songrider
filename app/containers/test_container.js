import { connect } from 'react-redux';
import { addNote } from '../actions/note_actions';
import Test from '../components/test';
// const WebMidi = require('../utils/webmidi.min.js');
// let input;
//
// const connectMidiDevice = () => {
//       input = WebMidi.inputs[0];
//       if (input) {
//         console.log("MIDI device Found!");
//         input.addListener('noteon', "all",
//           (e) => {
//             this.playMidi(e);
//           }
//         );
//         input.addListener('pitchbend', "all", (e)=> {
//             console.log("Pitch value: " + e.value);
//         });
//         input.addListener('noteoff', "all",
//           (e) => {
//             console.log(e);
//           }
//         );
//         input.addListener("controlchange", "all",
//           (e) => {
//             console.log(e);
//           }
//         );
//       } else {
//         console.log("No Device Found");
//       }
//     };
//
// WebMidi.enable((err) => {
//   if (err) {
//     console.log("WebMidi could not be enabled.", err);
//   } else {
//     console.log("WebMidi enabled!");
//     connectMidiDevice();
//   }
//
// });

const mapStateToProps = (state, ownProps) => ({
  notes: state.notes,
  weird: ownProps.weird
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
