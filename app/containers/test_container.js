import { connect } from 'react-redux';
import { addNote } from '../actions/note_actions';
import Test from '../components/test';

const mapStateToProps = state => ({
  notes: state.notes
});

const mapDispatchToProps = dispatch => ({
  addNote: note => dispatch(addNote(note)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
