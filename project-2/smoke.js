let bg;
let zoom = 1;
let targetZoom = 1;
let zooming = false;

let newText = "This isn't the first time this has happened.";

let textOpacity = 0; // start fully transparent
let textElement;

function preload() {
  bg = loadImage('assets/smokebali.jpg');
}

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('z-index', '-1');
  c.style('position', 'fixed');

  textElement = document.getElementById("sceneText");

  document.getElementById("pki").addEventListener("click", () => {
    targetZoom = 2.5; // zoom factor
    zooming = true;
    textOpacity = 0;  // reset opacity
  });
}

function draw() {
  background(0);

  // Zoom animation
  if (zooming) {
    zoom = lerp(zoom, targetZoom, 0.05);
    if (abs(zoom - targetZoom) < 0.01) {
      zooming = false;
    }
  }

  // Draw background zoomed to left side
  imageMode(CENTER);
  let focusX = width * 0.25; // 25% from left
  let focusY = height / 2;
  translate(focusX, focusY);
  scale(zoom);
  image(bg, 0, 0, width, height);

  if (zoom > 1.05) {
    textOpacity += 0.02;
    textOpacity = constrain(textOpacity, 0, 1);
    textElement.style.opacity = textOpacity;
    textElement.innerHTML = newText;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
