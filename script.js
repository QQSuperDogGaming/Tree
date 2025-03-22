// Toggle sound on/off
let isMuted = false;
const soundBtn = document.getElementById('sound-btn');
const treeSound = document.getElementById('tree-sound');

function toggleSound() {
  if (isMuted) {
    treeSound.play();
    soundBtn.textContent = 'Mute Sound';
  } else {
    treeSound.pause();
    soundBtn.textContent = 'Unmute Sound';
  }
  isMuted = !isMuted;
}
