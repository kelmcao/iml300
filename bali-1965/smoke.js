let bg;
let zoom = 1;
let targetZoom = 1;
let panX = 0;
let panY = 0;
let targetX = 0;
let targetY = 0;
let textOpacity = 0;
let visible = false;

function preload() {
  bg = loadImage('https://static01.nyt.com/images/2015/11/07/world/INDONESIA1/INDONESIA1-superJumbo.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
    .position(0, 0)
    .style('z-index', '-1')
    .style('position', 'fixed');

  select('#pki').mousePressed(() => {
    targetZoom = 3;
    targetX = width * 1;
    targetY = width * -0.32;


    select('#link')
      .attribute('href', 'fire.html')
      .toggleClass('censor')
      .html('Investigate further');

    visible = true;
  });

  select('canvas').style('pointer-events', 'none');
}

function draw() {
  background(0);

  zoom = lerp(zoom, targetZoom, 0.05);
  panX = lerp(panX, targetX, 0.05);
  panY = lerp(panY, targetY, 0.05);

  push();
  imageMode(CENTER);
  translate(width / 2 + panX, height / 2 + panY);
  scale(zoom);
  tint(150);
  image(bg, 0, 0, width, height);
  pop();

  if (zoom > 1.05) {
    textOpacity = min(textOpacity + 0.02, 1);
    select('.paragraph p')
      .style('opacity', textOpacity)
      .html('"Those scum...as if it wasn\'t enough for them to kill our generals, they\'re doing this. They\'re destroying our country." A voice mumbles, disgruntled.');
  }

  if (visible) {
    select('#link')
      .style('opacity', textOpacity);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
