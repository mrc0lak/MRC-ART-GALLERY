$(document).ready(function(){
  
    $('.gallery').click(function(){
        $(this).toggleClass('enlarged');
        $('.gallery').not(this).removeClass('enlarged');
    });
});