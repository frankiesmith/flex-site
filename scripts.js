$(document).ready(function() {
$('.button').on('click', function() {
    $('.pop-up-container').animate({
        'width': 'show'
    }, 1000, function() {
        $('.pop-up-container').fadeIn(500);
    });
});
	
$('.pop-up').on('click', function() {
    $('.pop-up-container').fadeOut(500, function() {
        $('.pop-up-container').animate({
            'width': 'hide'
        }, 1000);
    });
});
});