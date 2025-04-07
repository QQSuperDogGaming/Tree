function toggleSound() {
  const sound = document.getElementById('tree-sound');
  const btn = document.getElementById('mute-btn');
  if (sound.paused) {
    sound.play();
    btn.src = "assets/mute-btn.png"; // your unmute icon
  } else {
    sound.pause();
    btn.src = "assets/mute-btn.png"; // your mute icon
  }
}

function selectHKTree(modelFile, voiceFile, popupImage) {
  const viewer = document.getElementById('hk-model');
  const audio = document.getElementById('hk-voice');
  const popup = document.getElementById('hk-popup');
  const popupImg = document.getElementById('hk-popup-img');

  viewer.setAttribute('src', `assets/${modelFile}`);
  audio.setAttribute('src', `assets/${voiceFile}`);
  popupImg.setAttribute('src', `assets/${popupImage}`);
  popup.classList.add('show');
  audio.play();
}

function closePopup() {
  const popup = document.getElementById('hk-popup');
  popup.classList.remove('show');
}

function selectTree(voiceFile, popupImage) {
  const voice = document.getElementById('tree-voice');
  const popup = document.getElementById('tree-popup');
  const popupImg = document.getElementById('tree-popup-img');

  voice.setAttribute('src', `assets/${voiceFile}`);
  popupImg.setAttribute('src', `assets/${popupImage}`);
  popup.classList.add('show');
  voice.play();
}

function closeTreePopup() {
  const popup = document.getElementById('tree-popup');
  popup.classList.remove('show');
}
