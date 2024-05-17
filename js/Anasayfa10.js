$(document).ready(function(){
    var width = $(window).width();
    var textWidth = $('#kayan-yazi').outerWidth();
    var position = width;

    $('#kayan-yazi').css('left', position);

    function kaydir(){
        position--;
        if (position < -textWidth) {
            position = width;
        }
        $('#kayan-yazi').css('left', position);
        setTimeout(kaydir, 10);
    }

    kaydir();
});