function setup() {
    noCanvas();

    let overlay = createDiv('');
    overlay.id('fade');

    let links = selectAll('a');

    links.forEach(function(link) {
        link.mousePressed(function (e) {
            e.preventDefault();
            let destination = link.attribute('href');
            fadeToBlack(destination);
            return false;
        });
    });
}

function fadeToBlack(destination) {
    let overlay = select('#fade');
    overlay.style('opacity', '1');

    setTimeout(function() {
        window.location.href = destination;
    }, 3000);
}