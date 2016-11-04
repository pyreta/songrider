import React from 'react';

import findChords from '../utils/chord_analyzer'

const showNotes = (notes) => {
  return `Notes: ${notes.map((noteObj)=>{
    return noteObj.note;
  }).join(" ")}`;
};

const rectClick = () => {
  let circle = document.getElementById("circle");
  let newR = parseInt(circle.getAttribute("r"))+10
  circle.setAttribute("r", newR)
};

const mouseDown = (e) => {
  console.log(e.clientX);
};

const mouseMove = (e) => {
  console.log("client");
  console.log(e.clientX);
  console.log(e.clientY);
  console.log("screen");
  console.log(e.screenX);
  console.log(e.screenY);
};

const changeInstrument = (callback) => {
  console.log(document.getElementById("instrument").value);
  callback(document.getElementById("instrument").value);
};

const Test = ({ notes, inputs, device, addNote, loadKeys }) => (
  <div>
    <h2>{ showNotes(notes) }</h2>
    { inputs.map((input, idx)=> <h2 key={idx}>{`${input.manufacturer} ${input.name}`}</h2> ) }
    <h2>Chord: { findChords(notes).join(" or ") }</h2>
    <button onClick = {  addNote.bind(this, "G") }>
      click me!
    </button>
    <select defaultValue="spanish" id="instrument" onChange={changeInstrument.bind(this, loadKeys)}>
      <option value="harp">Harp</option>
      <option value="bells">Bells</option>
      <option value="spanish">Spanish Guitar</option>
      <option value="mellowstrings">Mellow Strings</option>
      <option value="synth">Synth</option>
      <option value="harpsichord">Harpsichord</option>
    </select>
    <svg width={600} onMouseMove={mouseMove}>
      <circle id={"circle"} cx={50} cy={50} r={10} fill="red" />
      <rect x={100} y={100} onClick={rectClick} rx={10} onMouseDown={mouseDown} ry={10} width={100} height={50} fill="blue"/>
    </svg>
  </div>
);

export default Test;
