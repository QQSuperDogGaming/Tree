// Toggle background sound
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

// Change AR model, voice, and info for Hong Kong Special Trees
function selectHKTree(modelFile, voiceFile, description) {
  const viewer = document.getElementById('hk-model');
  const audio = document.getElementById('hk-voice');
  const info = document.getElementById('hk-info');

  viewer.setAttribute('src', `assets/${modelFile}`);
  audio.setAttribute('src', `assets/${voiceFile}`);
  audio.play();
  info.textContent = description;
}
