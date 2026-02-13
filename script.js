$(document).ready(function() {
    $('[data-p5]').click(function() {
    var targetId = $(this).data('p5');
    var $target = $('[data-p5-id="' + targetId + '"]');
    
    $('.p5-container').not($target).slideUp();
    $target.slideToggle();
    });
});

