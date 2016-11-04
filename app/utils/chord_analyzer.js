const Note = require('./Note');

const uniq = (arr) => {
  let uniqueArray = [];
  arr.forEach((el) => {
    if (uniqueArray.indexOf(el) === -1) uniqueArray.push(el);
  });
  return uniqueArray;
};

const mapNoteNames = (notes) => {
  return uniq(notes.map((noteObj)=>{
    return noteObj.note;
  })).sort();
};

const createNoteClassObjects = (notes) => {
  return notes.map((note)=>{
    return new Note(note);
  });
};

const isChord = (noteObjectArray, type, label) => {
  if (!noteObjectArray) return false;
  let noteArray = mapNoteNames(noteObjectArray);
  let noteClassObjects = createNoteClassObjects(noteArray);
  let chordName = false;
  noteClassObjects.forEach((note, i) => {
    let chord = note.findChord(type).sort().join("");
    if (chord === noteArray.join("")) {
      chordName = `${note.root} ${label}`;
      noteArray.splice(i, noteArray.length - i);
    }
  });
  return chordName;
};

const isMajor = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj","Major");
};

const isMinor = (noteObjectArray) => {
  return isChord(noteObjectArray,"min","minor");
};

const isDiminished = (noteObjectArray) => {
  return isChord(noteObjectArray,"dim","Diminished");
};

const isMinor7 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min7","minor 7");
};

const isMajor7 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj7","Major 7");
};

const isDom7 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom7","Dom 7");
};

// -------

const isMaj9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj9","Maj 9");
};

const isMin9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min9","Min 9");
};

const isDom9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom9","Dom 9");
};

const isMaj11 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj11","Maj 11");
};

const isMin11 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min11","Min 11");
};

const isDom11 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom11","Dom 11");
};

const isMaj13 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj13","Maj 13");
};

const isMin13 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min13","Min 13");
};

const isDom13 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom13","Dom 13");
};

// -------


const isMajAdd2 = (noteObjectArray) => {
  return isChord(noteObjectArray,"majadd2","Major add 2");
};
const isMinAdd2 = (noteObjectArray) => {
  return isChord(noteObjectArray,"minadd2","Minor 7");
};
const isAug = (noteObjectArray) => {
  return isChord(noteObjectArray,"aug","Augmented");
};
const isSus2 = (noteObjectArray) => {
  return isChord(noteObjectArray,"sus2","Suspended 2nd");
};
const isSus4 = (noteObjectArray) => {
  return isChord(noteObjectArray,"sus4","Suspended 4th");
};
const isSus42 = (noteObjectArray) => {
  return isChord(noteObjectArray,"sus42","Suspended 4th and 2nd");
};
const isMaj6 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj6","Major 6");
};
const isMin6 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min6","Minor 6");
};
const isMinFlat6 = (noteObjectArray) => {
  return isChord(noteObjectArray,"minflat6","Minor Flatted 6");
};
const isDom7Flat5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom7flat5","Dominant 7 Flatted 5");
};
const isDom7Sharp5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom7sharp5","Dominant 7 Sharp 5");
};
const isMinMaj7 = (noteObjectArray) => {
  return isChord(noteObjectArray,"minmaj7","Minor Major 7");
};
const isMin7Flat5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min7flat5","Minor 7 Flatted 5");
};
const isDim7 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dim7","Dim 7");
};
const isDom9flat5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom9flat5","Dominant 9 Flatted 5");
};
const isMin9Flat5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min9flat5","Minor 9 Flatted 5");
};
const isMaj9Flat5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj9flat5","Major 9 Flatted 5");
};
const isDom9Sharp5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom9sharp5","Dominant 9 Sharp 5");
};
const isMin9Sharp5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min9sharp5","Minor 9 Sharp 5");
};
const isMaj9Sharp5 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj9sharp5","Major 9 Sharp 5");
};
const isDom9Sharp5Flat9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom9sharp5flat9","Dominant 9 Sharp 5 Flatted 9");
};
const isMin9Sharp5Flat9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min9sharp5flat9","Minor 9 Sharp 5 Flatted 9");
};
const isMaj9Sharp5Flat9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj9sharp5flat9","Major 9 Sharp 5 Flatted 9");
};
const isDom9Sharp5Sharp9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"dom9sharp5sharp9","Dominant 9 Sharp 5 Sharp 9");
};
const isMin9Sharp5Sharp9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"min9sharp5sharp9","Minor 9 Sharp 5 Sharp 9");
};
const isMaj9Sharp5Sharp9 = (noteObjectArray) => {
  return isChord(noteObjectArray,"maj9sharp5sharp9","Major 9 Sharp 5 Sharp 9");
};

// const findChord = (notes) => {
//   if (isMajor(notes)) {
//     return isMajor(notes);
//   } else if (isMinor(notes)) {
//     console.log("MINOR");
//     return isMinor(notes);
//   } else if (isDiminished(notes)) {
//     console.log("DIMINISHED");
//     return isDiminished(notes);
//   } else if (isMinor7(notes)) {
//     return isMinor7(notes);
//   } else if (isMajor7(notes)) {
//     return isMajor7(notes);
//   } else if (isDom7(notes)) {
//     return isDom7(notes);
//
//   } else if (isMaj9(notes)) {
//     return isMaj9(notes);
//   } else if (isMin9(notes)) {
//     return isMin9(notes);
//   } else if (isDom9(notes)) {
//     return isDom9(notes);
//   } else if (isMaj11(notes)) {
//     return isMaj11(notes);
//   } else if (isMin11(notes)) {
//     return isMin11(notes);
//   } else if (isDom11(notes)) {
//     return isDom11(notes);
//   } else if (isMaj13(notes)) {
//     return isMaj13(notes);
//   } else if (isMin13(notes)) {
//     return isMin13(notes);
//   } else if (isDom13(notes)) {
//     return isDom13(notes);
//
//   } else if (isMajAdd2(notes)) {
//     return isMajAdd2(notes);
//   } else if (isMinAdd2(notes)) {
//     return isMinAdd2(notes);
//   } else if (isAug(notes)) {
//     return isAug(notes);
//   } else if (isSus2(notes)) {
//     return isSus2(notes);
//   } else if (isSus4(notes)) {
//     return isSus4(notes);
//   } else if (isSus42(notes)) {
//     return isSus42(notes);
//   } else if (isMaj6(notes)) {
//     return isMaj6(notes);
//   } else if (isMin6(notes)) {
//     return isMin6(notes);
//   } else if (isMinFlat6(notes)) {
//     return isMinFlat6(notes);
//   } else if (isDom7Flat5(notes)) {
//     return isDom7Flat5(notes);
//   } else if (isDom7Sharp5(notes)) {
//     return isDom7Sharp5(notes);
//   } else if (isMinMaj7(notes)) {
//     return isMinMaj7(notes);
//   } else if (isMin7Flat5(notes)) {
//     return isMin7Flat5(notes);
//   } else if (isDim7(notes)) {
//     return isDim7(notes);
//   } else if (isDom9flat5(notes)) {
//     return isDom9flat5(notes);
//   } else if (isMin9Flat5(notes)) {
//     return isMin9Flat5(notes);
//   } else if (isMaj9Flat5(notes)) {
//     return isMaj9Flat5(notes);
//   } else if (isDom9Sharp5(notes)) {
//     return isDom9Sharp5(notes);
//   } else if (isMin9Sharp5(notes)) {
//     return isMin9Sharp5(notes);
//   } else if (isMaj9Sharp5(notes)) {
//     return isMaj9Sharp5(notes);
//   } else if (isDom9Sharp5Flat9(notes)) {
//     return isDom9Sharp5Flat9(notes);
//   } else if (isMin9Sharp5Flat9(notes)) {
//     return isMin9Sharp5Flat9(notes);
//   } else if (isMaj9Sharp5Flat9(notes)) {
//     return isMaj9Sharp5Flat9(notes);
//   } else if (isDom9Sharp5Sharp9(notes)) {
//     return isDom9Sharp5Sharp9(notes);
//   } else if (isMin9Sharp5Sharp9(notes)) {
//     return isMin9Sharp5Sharp9(notes);
//   } else if (isMaj9Sharp5Sharp9(notes)) {
//     return isMaj9Sharp5Sharp9(notes);
//   } else {
//     return "None";
//   }
// };
const findChords = (notes) => {
  let chords = [];
  if (isMajor(notes)) {
    chords.push(isMajor(notes));
  } if (isMinor(notes)) {
    chords.push(isMinor(notes));
  } if (isDiminished(notes)) {
    chords.push(isDiminished(notes));
  } if (isMinor7(notes)) {
    chords.push(isMinor7(notes));
  } if (isMajor7(notes)) {
    chords.push(isMajor7(notes));
  } if (isDom7(notes)) {
    chords.push(isDom7(notes));

  } if (isMaj9(notes)) {
    chords.push(isMaj9(notes));
  } if (isMin9(notes)) {
    chords.push(isMin9(notes));
  } if (isDom9(notes)) {
    chords.push(isDom9(notes));
  } if (isMaj11(notes)) {
    chords.push(isMaj11(notes));
  } if (isMin11(notes)) {
    chords.push(isMin11(notes));
  } if (isDom11(notes)) {
    chords.push(isDom11(notes));
  } if (isMaj13(notes)) {
    chords.push(isMaj13(notes));
  } if (isMin13(notes)) {
    chords.push(isMin13(notes));
  } if (isDom13(notes)) {
    chords.push(isDom13(notes));

  } if (isMajAdd2(notes)) {
    chords.push(isMajAdd2(notes));
  } if (isMinAdd2(notes)) {
    chords.push(isMinAdd2(notes));
  } if (isAug(notes)) {
    chords.push(isAug(notes));
  } if (isSus2(notes)) {
    chords.push(isSus2(notes));
  } if (isSus4(notes)) {
    chords.push(isSus4(notes));
  } if (isSus42(notes)) {
    chords.push(isSus42(notes));
  } if (isMaj6(notes)) {
    chords.push(isMaj6(notes));
  } if (isMin6(notes)) {
    chords.push(isMin6(notes));
  } if (isMinFlat6(notes)) {
    chords.push(isMinFlat6(notes));
  } if (isDom7Flat5(notes)) {
    chords.push(isDom7Flat5(notes));
  } if (isDom7Sharp5(notes)) {
    chords.push(isDom7Sharp5(notes));
  } if (isMinMaj7(notes)) {
    chords.push(isMinMaj7(notes));
  } if (isMin7Flat5(notes)) {
    chords.push(isMin7Flat5(notes));
  } if (isDim7(notes)) {
    chords.push(isDim7(notes));
  } if (isDom9flat5(notes)) {
    chords.push(isDom9flat5(notes));
  } if (isMin9Flat5(notes)) {
    chords.push(isMin9Flat5(notes));
  } if (isMaj9Flat5(notes)) {
    chords.push(isMaj9Flat5(notes));
  } if (isDom9Sharp5(notes)) {
    chords.push(isDom9Sharp5(notes));
  } if (isMin9Sharp5(notes)) {
    chords.push(isMin9Sharp5(notes));
  } if (isMaj9Sharp5(notes)) {
    chords.push(isMaj9Sharp5(notes));
  } if (isDom9Sharp5Flat9(notes)) {
    chords.push(isDom9Sharp5Flat9(notes));
  } if (isMin9Sharp5Flat9(notes)) {
    chords.push(min9Sharp5Flat9(notes));
  } if (isMaj9Sharp5Flat9(notes)) {
    chords.push(isMaj9Sharp5Flat9(notes));
  } if (isDom9Sharp5Sharp9(notes)) {
    chords.push(isDom9Sharp5Sharp9(notes));
  } if (isMin9Sharp5Sharp9(notes)) {
    chords.push(isMin9Sharp5Sharp9(notes));
  } if (isMaj9Sharp5Sharp9(notes)) {
    chords.push(isMaj9Sharp5Sharp9(notes));
  }
};


export default findChords;
