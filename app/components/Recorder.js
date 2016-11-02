// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Recorder.css';

const WebMidi = require('../utils/webmidi.min.js');

export default class Recorder extends Component {
  constructor() {
    super();
    this.state = {
      instrument: 'spanish',
      input: null
    };
    this.start = null;
    this.events = [];
  }
  playBack(e){
    let speed = parseInt(document.getElementById("speed").value);
    this.events.forEach((eventt)=>{
      setTimeout(()=>{
        let path = `./samples/${eventt.instrument}/${eventt.note.split('#').join('sharp')}.wav`;
        let aaa = new Audio(path);
        aaa.volume = eventt.volume;
        aaa.play();
      },eventt.time/speed*500);
    });
  }

  playMidi(e){
    let volume = e.velocity;
    if (volume < 0.1) volume = 0.1;
    console.log(e);
    this.events.push({
      note:`${e.note.name}${e.note.octave}`,
      volume:volume,
      instrument:this.state.instrument,
      time:e.timestamp-this.start
    });
    console.log(this.events);
    // console.log("Received 'COMPONENT noteon' message (" + e.note.name + e.note.octave + ").");
    let note = e.note.name + e.note.octave;
    let path = `./samples/${this.state.instrument}/${note.split('#').join('sharp')}.wav`;
    let aaa = new Audio(path);
    aaa.volume = volume;
    aaa.play();
  }

  componentDidMount() {
    console.log("PROPS HERE");
    console.log(this.props);
    console.log("PROPS HERE again");
    this.props.changeInstrument(document.getElementById("instrument").value);
    this.props.clearNotes();
    console.log(this.props);
    let path = `./samples/harp/C3.wav`;
    let aaa = new Audio(path);
    aaa.load();
    let that = this;
    document.addEventListener("keydown", (e)=>{
      console.log(e);
    });
    document.getElementById("record").addEventListener("click", (e)=>{
      console.log("record clicked");
      // console.log(e);
      // console.log(e.timeStamp);
      // if (!that.start) that.start = e.timeStamp;
      this.start = e.timeStamp;
    });


    this.enableWedMidi();

  }

  erase() {
    this.start = null;
    this.events = [];
  }

  enableWedMidi() {
    WebMidi.enable((err) => {
      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        console.log("WebMidi enabled!");
        this.connectMidiDevice();
      }

    });
  }

  connectMidiDevice() {
        let input = WebMidi.inputs[0];
        if (input) {
          console.log("MIDI device Found!");
          this.setState({ input: WebMidi.inputs[0]});
          input.addListener('noteon', "all",
            (e) => {
              this.playMidi(e);
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
        } else {
          console.log("No Device Found");
          // WebMidi.disable();
        }
      }

  findMidiDevice() {
    let deviceInterval = setInterval(()=>{
      console.log("KJHASDKJAHSD");
      // this.connectMidiDevice();
    }, 1000);
    if (this.state.input) clearInterval(deviceInterval);
  }

  record() {
    this.playBack();
  }

  changeSpeed(){

  }

  changeInstrument(){
    console.log("Instrument Changed!");
    this.props.changeInstrument(document.getElementById("instrument").value);
    // this.forceUpdate();
    this.setState({instrument: document.getElementById("instrument").value});
  }

  render() {
    let noteString = "no notes";
    if (this.props.notes) noteString = this.props.notes.join("");
    return (
      <div>
        <div className={styles.container}>
          <h2>{noteString}</h2>
          <h2>{JSON.stringify(this.props)}</h2>
          <h2 onClick={this.playBack.bind(this)}>play</h2>
          <h2 onClick={this.erase.bind(this)}>clear</h2>
          <h2 id="record" onClick={this.record.bind(this)}>record</h2>
          <input onChange={this.changeSpeed} id="speed" type="range" min="0" max="1000"/>
          <select defaultValue="spanish" id="instrument" onChange={this.changeInstrument.bind(this)}>
            <option value="harp">Harp</option>
            <option value="bells">Bells</option>
            <option value="spanish">Spanish Guitar</option>
            <option value="harpsichord">Harpsichord</option>
          </select>

          {
            // <Link to="/counter">to Counter</Link>
          }
        </div>
      </div>
    );
  }
}
