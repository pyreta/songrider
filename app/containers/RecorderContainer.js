// @flow
import { connect } from 'react-redux';
import Recorder from '../components/Recorder';
import * as RecorderActions from '../actions/recorder';
// window.changeInstrument = RecorderActions.changeInstrument;
// window.addNote = RecorderActions.addNote;
// window.clearNotes = RecorderActions.clearNotes;
// window.removeNote = RecorderActions.removeNote;

// function mapStateToProps({ instrument, notes }) {
//   return {
//     instrument,
//     notes
//   };
// }

const mapStateToProps = (state) => ({
  instrument: state.instrument,
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => (
  {
    changeInstrument: instrument => {
      console.log("CHANGEEDDDDDD");
      return dispatch(RecorderActions.changeInstrument(instrument));
    },
    addNote: note => dispatch(RecorderActions.addNote(note)),
    removeNote: note => dispatch(RecorderActions.removeNote(note)),
    clearNotes: () => dispatch(RecorderActions.clearNotes())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
