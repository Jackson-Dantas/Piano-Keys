// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
const pianoSong = document.getElementById('song');
// keys.forEach(function(key){
//   notes.push(document.getElementById(key));
// })

keys.forEach((key) => notes.push(document.getElementById(key))); 

// function that change the color of the keys below
const keyPlay = event => event.target.style.backgroundColor = 'seagreen';
const keyReturn = event => event.target.style.backgroundColor = '';

// function with event handler properties
const playPiano = note => {
    note.addEventListener('mousedown', keyPlay);
    note.addEventListener('mouseup', keyReturn);
    //pianoSong.onplay = () => {console.log('play')};
}

// loop that runs the array elements through the function
notes.forEach(playPiano); 

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Event handler property and function for the first progress button
nextOne.addEventListener('click', () => {
  nextOne.hidden = true;
  nextTwo.hidden = false;
  document.getElementById('letter-note-five').innerHTML = "D"; 
  document.getElementById('letter-note-six').innerHTML = "C"; 
})

// Anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', () => {
  nextTwo.hidden = true;
  nextThree.hidden = false;
  document.getElementById('word-five').innerHTML = "DEAR"; 
  document.getElementById('word-six').innerHTML = "FRI-"; 
  document.getElementById('letter-note-three').innerHTML = "G"; 
  document.getElementById('letter-note-four').innerHTML = "E"; 
  document.getElementById('letter-note-five').innerHTML = "C"; 
  document.getElementById('letter-note-six').innerHTML = "B"; 
  lastLyric.style.display = 'inline-block';
})

// Anonymous event handler property and function for the third progress button
nextThree.onclick = function( ){
  nextThree.hidden = true;
  startOver.hidden = false;
  document.getElementById('word-one').innerHTML = "LET'S";
  document.getElementById('word-two').innerHTML = 'Rock!';
  document.getElementById('word-three').innerHTML = 'CON-';
  document.getElementById('word-four').innerHTML = 'GRATS';
  document.getElementById('word-five').innerHTML = 'YOU';
  document.getElementById('word-six').innerHTML = 'WIN!';
  lastLyric.style.display = 'none';

}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}