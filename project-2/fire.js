let fireSound;
let hasStarted = false;

function preload() {
  fireSound = loadSound("audio/fire-1.mp3");
}

function setup() {
  createCanvas(1, 1).hide();
  console.log("Sketch loaded. Click anywhere to start audio.");
}

function mousePressed() {
  if (!hasStarted) {
    hasStarted = true;
    fireSound.play();
  }
}

function fadeInSound(duration) {
  let currentVol = 0;
  let step = 0.05;
  let interval = setInterval(() => {
    currentVol += step;
    fireSound.setVolume(constrain(currentVol, 0, 1));
    if (currentVol >= 1) clearInterval(interval);
  }, duration * 1000 * step);
}
