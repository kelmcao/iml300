$(document).ready(function() {
    $('.timeline-item').not(':first').hide();
    $('.timeline-item').click(function(){
        var popupId = $(this).data('popup');
        var clickedItem = $(this);
        $('.popup[data-popup-id="' + popupId + '"], .popup-overlay[data-popup-id="' + popupId + '"]').fadeIn();
        clickedItem.data('nextItem', clickedItem.next('.timeline-item'));
    }); 

    $('.close, .popup-overlay').click(function(){
        var popupId;
        if ($(this).hasClass('close')) {
            popupId = $(this).closest('.popup').data('popup-id');
        } else {
            popupId = $(this).data('popup-id');
        }
        var clickedItem = $('.timeline-item[data-popup="' + popupId + '"]');
        var nextItem = clickedItem.data('nextItem');
        
        $('.popup, .popup-overlay').fadeOut(function() {
            if (nextItem && nextItem.length > 0) {
                nextItem.fadeIn();
            }
            if (popupId == 'sixth'){
                $('#next-page').fadeIn();
            }
        });
    });
});