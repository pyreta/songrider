import React from 'react';



const Test = ({ notes, inputs, device, addNote }) => (
  <div>
    { notes.join(" ") }
    { inputs.map((input, idx)=> <h2 key={idx}>{`${input.manufacturer} ${input.name}`}</h2> ) }
    <h2>In a container!</h2>
    <button onClick = {  addNote.bind(this, "G") }>
      click me!
    </button>
  </div>
);

export default Test;
