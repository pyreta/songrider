// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Controls.css';

const WebMidi = require('../utils/webmidi.min.js');

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      instrument: 'harp'
    };
    this.start = null;
    this.events = [];
  }
  playy(e){
    // console.log(e.timestamp);
    // let path = "./samples/test.wav";
    // let aaa = new Audio(path);
    // aaa.controle=true;
    // aaa.play();
    let speed = parseInt(document.getElementById("speed").value);
    this.events.forEach((eventt)=>{
      // console.log(eventt);
      setTimeout(()=>{
        console.log(eventt);
        console.log("speed");
        console.log(speed);
        let path = `./samples/${eventt.instrument}/${eventt.note.split('#').join('sharp')}.wav`;
        let aaa = new Audio(path);
        aaa.volume = eventt.volume;
        aaa.play();
      },eventt.time/speed*500);
    });
  }

  playMidi(e){
    // console.log("MIDI PLAYED!!!");
    console.log(e);
    this.events.push({
      note:`${e.note.name}${e.note.octave}`,
      volume:e.velocity,
      instrument:this.state.instrument,
      time:e.timestamp-this.start
    });
    console.log(this.events);
    // console.log("Received 'COMPONENT noteon' message (" + e.note.name + e.note.octave + ").");
    let note = e.note.name + e.note.octave;
    let path = `./samples/${this.state.instrument}/${note.split('#').join('sharp')}.wav`;
    let aaa = new Audio(path);
    // console.log(path);
    aaa.volume = e.velocity;
    // aaa.loop=true;
    if (aaa.volume < 0.1) aaa.volume = 0.1;
    // aaa.load();
    aaa.play();
  }

  componentDidMount() {
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
      that.start = e.timeStamp;
    });

    WebMidi.enable((err) => {

      if (err) {
        console.log("WebMidi could not be enabled.", err);
      } else {
        console.log("WebMidi enabled!");
        let input = WebMidi.inputs[0];
        input.addListener('noteon', "all",
          function (e) {
            that.playMidi(e);
          }
        );

      input.addListener('noteoff', "all",
        function (e) {
          console.log(e);
          // console.log("Received 'COMPONENT noteoff' message (" + e.note.name + e.note.octave + ").");
        }
      );
      }

    });

  }

  erase() {
    this.start = null;
    this.events = [];
  }

  record() {

  }

  changeSpeed(){

  }

  changeInstrument(){
    console.log("Instrument Changed!");
    this.setState({instrument: document.getElementById("instrument").value});
  }

  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2 onClick={this.playy.bind(this)}>play</h2>
          <h2 onClick={this.erase.bind(this)}>clear</h2>
          <h2 id="record" onClick={this.record.bind(this)}>record</h2>
          <input onChange={this.changeSpeed} id="speed" type="range" min="0" max="1000"/>
          <select defaultValue="harp" id="instrument" onChange={this.changeInstrument.bind(this)}>
            <option value="harp">Harp</option>
            <option value="bells">Bells</option>
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
