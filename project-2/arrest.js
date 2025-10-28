let paragraph;

function setup() {
    noCanvas();

    paragraph = select('.paragraph p');
    selectAll('a').forEach(function(link) {
        if (link.html().includes("silently watch him pass by")) {
            link.mousePressed(function(event) {
                event.preventDefault();
                updateTextFirst();
            });
        }
        if (link.html().includes("Wait-he hasn't done anything wrong")) {
            link.mousePressed(function(event) {
                event.preventDefault();
                updateTextSecond();
            });
        }
    });
    let audio = select('audio');
    audio.volume(0.5);
}

function updateTextFirst() {
    selectAll('a').forEach(function(link) {
        link.remove();
    });

    paragraph.html(`
    <span id="fade" style="opacity:0; transition:opacity 1s;">
      He glances briefly at you, before holding his head down in shame. 
      <a href="ending2.html">You keep moving.</a>
    </span>
  `);

    setTimeout(function() {
        select('#fade').style('opacity', 1);
    }, 10);
}

function updateTextSecond() {
    selectAll('a').forEach(function(link) {
        link.remove();
    });

    paragraph.html(`
    <span id="fade2" style="opacity:0; transition:opacity 1s;">
      The soldiers push you away, but you're insistent. Your professor looks down, averting your gaze.
      Your memory is blurry here-you recall the soldiers asking him "do you know this student?"
      He adamantly answers "No," and asks you to leave. Do you...
      <a class="censor" href="ending1.html">stay</a> 
      <a href="ending2.html">back away</a>?
    </span>
  `);

    setTimeout(function() {
        select('#fade2').style('opacity', 1);
    }, 10);
}