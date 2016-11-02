// @flow
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import RecorderContainer from './containers/RecorderContainer';
import './app.global.css';



// const store = configureStore();
// window.store = store;
// const history = syncHistoryWithStore(hashHistory, store);
//
// render(
//   <Provider store={store}>
//     <RecorderContainer />
//   </Provider>,
//   document.getElementById('root')
// );



import store from './store/store.js';
import TestContainer from './containers/test_container';

import { addNote } from './actions/note_actions';

window.store = store;
window.addNote = addNote;

const noteOn = (e) => {
	console.log(e);
};

const noteOff = (e) => {
	console.log(e);
};

const controlChange = (e) => {
	console.log(e);
};

const pitchBend = (e) => {
	console.log("Pitch value: " + e.value);
};

const connectMidiDevice = (input) => {
      if (input) {
        console.log("MIDI device Found!");
        input.addListener('noteon', "all",
          (e) => {
            noteOn(e);
          }
        );
        input.addListener('pitchbend', "all", (e)=> {
            pitchBend(e);
        });
        input.addListener('noteoff', "all",
          (e) => {
            noteOn(e);
          }
        );
        input.addListener("controlchange", "all",
          (e) => {
            controlChange(e);
          }
        );
      } else {
        console.log("No Device Found");
      }
    };


const App = (props) => (
	<Provider store={store}>
		<TestContainer inputs={props.inputs}/>
	</Provider>
);

document.addEventListener("DOMContentLoaded", () => {
	const WebMidi = require('./utils/webmidi.min.js');
	WebMidi.enable((err) => {
		if (err) {
			console.log("WebMidi could not be enabled.", err);
		} else {
			console.log("WebMidi enabled!");
			connectMidiDevice(WebMidi.inputs[0]);
		}

	});
	render(
		<App inputs={WebMidi.inputs}/>,
		document.getElementById('root')
	);
});
