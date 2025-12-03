$(document).ready(function() {

    // Make first text block visible on page load
    $('.index-block').first().addClass('fade-in');
    
    // On hover, fade in the next text block
    $('.index-block').on('mouseenter', function() {
        const $next = $(this).next('.index-block');
        
        if ($next.length && !$next.hasClass('fade-in')) {
            $next.addClass('fade-in');
        }
    });
});