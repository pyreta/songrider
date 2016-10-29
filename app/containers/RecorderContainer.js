// // @flow
// import React, { Component } from 'react';
// import Home from '../components/Home';
// import Recorder from '../components/Recorder';
//
// export default class RecorderContainer extends Component {
//   render() {
//     return (
//       <Recorder />
//     );
//   }
// }

// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Recorder from '../components/Recorder';
import * as RecorderActions from '../actions/recorder';
window.changeInstrument = RecorderActions.changeInstrument;

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeInstrument: RecorderActions.changeInstrument
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
