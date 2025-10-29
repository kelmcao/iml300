let paragraph;

function setup() {
    noCanvas();

    paragraph = select('.paragraph p');
 
    select('body').elt.addEventListener('click', function(event) {
        let target = event.target;
        
        if (target.tagName === 'A') {
            let linkText = target.textContent;
            
            if (linkText.includes("silently watch him pass by")) {
                event.preventDefault();
                updateTextFirst();
            }
            else if (linkText.includes("Wait-he hasn't done anything wrong")) {
                event.preventDefault();
                updateTextSecond();
            }
        }
    });
    
    let audio = select('audio');
    audio.volume(0.4);
}

function updateTextFirst() {
    selectAll('a').forEach(function(link) {
        link.remove();
    });

    paragraph.html(`
    <span id="fade-text" style="opacity:0; transition:opacity 1s;">
      He glances briefly at you, before holding his head down in shame. 
      <a href="ending2.html">You keep moving.</a>
    </span>
  `);

    setTimeout(function() {
        select('#fade-text').style('opacity', 1);
    }, 10);
}

function updateTextSecond() {
    selectAll('a').forEach(function(link) {
        link.remove();
    });

    paragraph.html(`
    <span id="fade-text2" style="opacity:0; transition:opacity 1s;">
      The soldiers push you away, but you're insistent. Your professor looks down, averting your gaze.
      Your memory is blurry here-you recall the soldiers asking him "do you know this student?"
      He adamantly answers "No," and asks you to leave. Do you...
      <a class="censor" href="ending1.html">stay</a> 
      <a href="ending2.html">back away</a>?
    </span>
  `);

    setTimeout(function() {
        select('#fade-text2').style('opacity', 1);
    }, 10);
}