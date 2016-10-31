// @flow
import { connect } from 'react-redux';
import Recorder from '../components/Recorder';
import * as RecorderActions from '../actions/recorder';
window.changeInstrument = RecorderActions.changeInstrument;
window.addNote = RecorderActions.addNote;
window.clearNotes = RecorderActions.clearNotes;
window.removeNote = RecorderActions.removeNote;

function mapStateToProps({ instrument, notes }) {
  return {
    instrument,
    notes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInstrument: instrument => dispatch(RecorderActions.changeInstrument(instrument)),
    addNote: note => dispatch(RecorderActions.addNote(note)),
    removeNote: note => dispatch(RecorderActions.removeNote(note)),
    clearNotes: () => dispatch(RecorderActions.clearNotes())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
