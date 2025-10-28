let paragraph;
let nextLink;

function setup() {
  noCanvas();

  paragraph = select('.paragraph p');

  // Find the link with the "You silently watch him pass by" text
  selectAll('a').forEach(link => {
    if (link.html().includes("You silently watch him pass by")) {
      link.mousePressed((event) => {
        event.preventDefault();
        updateText();
      });
    }
  });
}

function updateText() {

  selectAll('a').forEach(link => link.remove());

  paragraph.html(`
    <span id="fade" style="opacity:0; transition:opacity 1s;">
      You silently watch him pass by. He glances briefly at you, before holding his head down in shame. 
      <span id="next" style="color:#ff5656; text-decoration:underline; cursor:pointer;">
        You keep moving.
      </span>
    </span>
  `);

  setTimeout(() => select('#fade').style('opacity', 1), 10);

  nextLink = select('#next');
  nextLink.mousePressed(() => {
    window.location.href = 'ending2.html';
  });
}