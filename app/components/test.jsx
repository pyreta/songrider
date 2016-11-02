import React from 'react';

const Test = (props) => (
  <div>
    {props.notes.join("-")}
    {JSON.stringify(props)}
    <h2>In a container!</h2>
    <button onClick = { props.addNote.bind(this, "G") }>
      click me!
    </button>
  </div>
);

export default Test;
