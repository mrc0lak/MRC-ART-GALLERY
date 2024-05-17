$(document).ready(function(){
    $("button1").click(function(){
      $("#p1").fadeToggle();
      $("#p2").fadeToggle("slow");
      $("#p3").fadeToggle(3000);
    });
  });