function setup() {
    noCanvas();

    let overlay = createDiv('');
    overlay.style('position', 'fixed');
    overlay.style('top', '0');
    overlay.style('left', '0');
    overlay.style('width', '100%');
    overlay.style('height', '100%');
    overlay.style('background-color', 'black');
    overlay.style('opacity', '0');
    overlay.style('pointer-events', 'none');
    overlay.style('z-index', '9999');
    overlay.style('transition', 'opacity 1s ease');
    overlay.id('fadeOverlay');

    // Get all links on the page
    let links = selectAll('a');

    links.forEach(link => {
        link.mousePressed(function (e) {
            e.preventDefault();
            let destination = this.elt.href;
            fadeToBlack(destination);
            return false;
        });
    });
}

function fadeToBlack(destination) {
    let overlay = select('#fadeOverlay');
    overlay.style('opacity', '1');

    setTimeout(() => {
        window.location.href = destination;
    }, 1000);
}