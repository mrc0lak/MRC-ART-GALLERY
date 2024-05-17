$(document).ready(function(){
    var yazi = $('#yazi').text();
    $('#yazi').empty();
    for(var i=0; i<yazi.length; i++){
        $('#yazi').append('<span>' + yazi[i] + '</span>');
    }
    $('#yazi span').each(function(i){
        $(this).delay(100*i).fadeIn(100);
    });
});