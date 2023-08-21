// function playAudio(audioSrc) {
//     const audio = new Audio(audioSrc);
//     audio.play();
//   }

// let currentAudio = null;

// // Function to play or stop audio when button is clicked
// function playAudio(audioSrc) {
//   if (currentAudio && !currentAudio.paused) {
//     currentAudio.pause();
//     if (currentAudio.src === audioSrc) {
//       // If the same button is clicked again, pause the audio and reset currentAudio
//       currentAudio = null;
//       return;
//     }
//   }

//   currentAudio = new Audio(audioSrc);
//   currentAudio.play();
// }

let currentAudio = null;

// Function to play audio when button is clicked
function playAudio(audioSrc) {
  if (currentAudio) {
    currentAudio.pause();
  }
  currentAudio = new Audio(audioSrc);
  currentAudio.play();
}

// Function to stop audio when the Stop button is clicked
function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
