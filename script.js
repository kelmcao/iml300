$(document).ready(function() {
    $('[data-p5]').click(function() {
    var targetId = $(this).data('p5');
    var $target = $('[data-p5-id="' + targetId + '"]');
    
    $('.p5-container').not($target).slideUp();
    $target.slideToggle();
    });
});

let particles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // Create particles for a gentle animated background
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(70, 300),
            speedX: random(-0.5, 0.5),
            speedY: random(-0.5, 0.5),
            color: color(random([255, 221, 255]), random([240, 200, 255]), 255, random(30, 80))
        });
    }
}

function draw() {

    background(255, 240, 245); // lavenderblush

    drawingContext.filter = 'blur(20px)';

    for (let p of particles) {
        noStroke();
        fill(p.color);
        circle(p.x, p.y, p.size);
        
        p.x += p.speedX;
        p.y += p.speedY;

    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}