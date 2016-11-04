// const Chord = require("./Chord");
const Notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",];

const semitones = ["root","flat_second","second", "min_third", "maj_third", "fourth", "flat_fifth", "fifth",
		"sharp_fifth", "maj_six", "min_seven", "maj_seven", "upper_octave","flat_nine", "nine", "sharp_nine",
    "flat_eleven", "eleven", "sharp_eleven", "fifth_octave_up","sharp_fifth_octave_up","thirteen", "min_seven_up",
    "maj_seven_up","second_octave_up"];

class Note {
  constructor(note) {
    this.root = note;
    this.note = note;
    this.noteIndex = Notes.indexOf(note);
    this.flatSecondIndex = this.findSemitoneIndex(1);
    this.secondIndex = this.findSemitoneIndex(2);
    this.minThirdIndex = this.findSemitoneIndex(3);
    this.majThirdIndex = this.findSemitoneIndex(4);
    this.fourthIndex = this.findSemitoneIndex(5);
    this.flattedFifthIndex = this.findSemitoneIndex(6);
    this.fifthIndex = this.findSemitoneIndex(7);
    this.sharpFifthIndex = this.findSemitoneIndex(8);
    this.majSixthIndex = this.findSemitoneIndex(9);
    this.minSeventhIndex = this.findSemitoneIndex(10);
    this.majSeventhIndex = this.findSemitoneIndex(11);
    this.flattedNinthIndex = this.findSemitoneIndex(13);
    this.ninthIndex = this.findSemitoneIndex(14);
    this.sharpNinthIndex = this.findSemitoneIndex(15);
    this.eleventhIndex = this.findSemitoneIndex(17);
    this.thirteenthIndex = this.findSemitoneIndex(21);

		this.flatSecond = Notes[this.flatSecondIndex];
    this.second = Notes[this.secondIndex];
    this.minThird = Notes[this.minThirdIndex];
    this.majThird = Notes[this.majThirdIndex];
    this.fourth = Notes[this.fourthIndex];
    this.flattedFifth = Notes[this.flattedFifthIndex];
    this.fifth = Notes[this.fifthIndex];
    this.sharpFifth = Notes[this.sharpFifthIndex];
    this.majSixth = Notes[this.majSixthIndex];
    this.minSeventh = Notes[this.minSeventhIndex];
    this.majSeventh = Notes[this.majSeventhIndex];
    this.flattedNinth = Notes[this.flattedNinthIndex];
    this.ninth = Notes[this.ninthIndex];
    this.sharpNinth = Notes[this.sharpNinthIndex];
    this.eleventh = Notes[this.eleventhIndex];
    this.thirteenth = Notes[this.thirteenthIndex];
  }

  findSemitoneIndex(semitones){
    return (this.noteIndex + semitones) % Notes.length;
  }

	majorChordNotes() {
		return [this.root, this.majThird, this.fifth];
	}

	findChord(type){
    let notes;
    switch (type) {
      case "maj":
          notes = this.majorChordNotes();
        break;
      case "min":
          notes = [this.root, this.minThird, this.fifth];
        break;
      case "dim":
          notes = [this.root, this.minThird, this.flattedFifth];
        break;
      case "maj6":
          notes = [this.root, this.majThird, this.fifth, this.majSixth];
        break;
      case "min6":
          notes = [this.root, this.minThird, this.fifth, this.majSixth];
        break;
      case "maj7":
          notes = [this.root, this.majThird, this.fifth, this.majSeventh];
        break;
      case "min7":
          notes = [this.root, this.minThird, this.fifth, this.minSeventh];
        break;
      case "dom7":
          notes = [this.root, this.majThird, this.fifth, this.minSeventh];
        break;
      case "maj9":
          notes = [this.root, this.majThird, this.fifth, this.majSeventh, this.ninth];
        break;
      case "min9":
          notes = [this.root, this.minThird, this.fifth, this.minSeventh, this.ninth];
        break;
      case "dom9":
          notes = [this.root, this.majThird, this.fifth, this.minSeventh, this.ninth];
        break;
      case "maj11":
          notes = [this.root, this.majThird, this.fifth, this.majSeventh, this.ninth, this.eleventh];
        break;
      case "min11":
          notes = [this.root, this.minThird, this.fifth, this.minSeventh, this.ninth, this.eleventh];
        break;
      case "dom11":
          notes = [this.root, this.majThird, this.fifth, this.minSeventh, this.ninth, this.eleventh];
        break;
      case "maj13":
          notes = [this.root, this.majThird, this.fifth, this.majSeventh, this.ninth, this.eleventh, this.thirteenth];
        break;
      case "min13":
          notes = [this.root, this.minThird, this.fifth, this.minSeventh, this.ninth, this.eleventh, this.thirteenth];
        break;
      case "dom13":
          notes = [this.root, this.majThird, this.fifth, this.minSeventh, this.ninth, this.eleventh, this.thirteenth];
        break;


			case "majadd2":
					notes = [this.root, this.second, this.majThird, this.fifth];
				break;
			case "minadd2":
					notes = [this.root, this.second, this.minThird, this.fifth];
				break;
			case "aug":
					notes = [this.root, this.majThird, this.sharpFifth];
				break;
			case "sus2":
					notes = [this.root, this.second, this.fifth];
				break;
			case "sus4":
					notes = [this.root, this.fourth, this.fifth];
				break;
			case "sus42":
					notes = [this.root, this.second, this.fourth, this.fifth];
				break;
			case "maj6":
					notes = [this.root, this.majThird, this.fifth, this.majSixth];
				break;
			case "min6":
					notes = [this.root, this.minThird, this.fifth, this.majSixth];
				break;
			case "minflat6":
					notes = [this.root, this.minThird, this.fifth, this.sharpFifth];
				break;
			case "dom7flat5":
					notes = [this.root, this.majThird, this.flattedFifth, this.minSeventh];
				break;
			case "dom7sharp5":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh];
				break;
			case "minmaj7":
					notes = [this.root, this.minThird, this.fifth, this.majSeventh];
				break;
			case "min7flat5":
					notes = [this.root, this.minThird, this.flattedFifth, this.minSeventh];
				break;
					case "dim7":
					notes = [this.root, this.minThird, this.flattedFifth,  this.majSixth];
				break;
			case "dom9flat5":
					notes = [this.root, this.majThird, this.flattedFifth, this.minSeventh,this.ninth];
				break;
			case "min9flat5":
					notes = [this.root, this.majThird, this.flattedFifth, this.minSeventh,this.ninth];
				break;
			case "maj9flat5":
					notes = [this.root, this.majThird, this.flattedFifth, this.minSeventh,this.ninth];
				break;
			case "dom9sharp5":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.ninth];
				break;
			case "min9sharp5":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.ninth];
				break;
			case "maj9sharp5":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.ninth];
				break;
			case "dom9sharp5flat9":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.flattedNinth];
				break;
			case "min9sharp5flat9":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.flattedNinth];
				break;
			case "maj9sharp5flat9":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.flattedNinth];
				break;
			case "dom9sharp5sharp9":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.sharpNinth];
				break;
			case "min9sharp5sharp9":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.sharpNinth];
				break;
			case "maj9sharp5sharp9":
					notes = [this.root, this.majThird, this.sharpFifth, this.minSeventh,this.sharpNinth];
				break;

    }
    return notes;
  }
}
module.exports = Note;
