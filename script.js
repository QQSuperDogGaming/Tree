// Animate counters
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const updateCount = () => {
    const increment = target / 100;
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Sound toggle
function toggleSound() {
  const audio = document.getElementById('tree-sound');
  const btn = document.getElementById('sound-btn');
  if (audio.paused) {
    audio.play();
    btn.innerText = "Mute Sound";
  } else {
    audio.pause();
    btn.innerText = "Unmute Sound";
  }
}
