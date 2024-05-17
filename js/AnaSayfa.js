$("#flip").click(function () {
    $("#panel").slideToggle("slow");
});
$("#flip1").click(function () {
    $("#panel1").slideToggle("slow");
});
$("#flip2").click(function () {
    $("#panel2").slideToggle("slow");
});
$("#flip3").click(function () {
    $("#panel3").slideToggle("slow");
});
$("#flip4").click(function () {
    $("#panel4").slideToggle("slow");
});
$("#flip5").click(function () {
    $("#panel5").slideToggle("slow");
});
$("#flip6").click(function () {
    $("#panel5").slideToggle("slow");
});
$("#flip7").click(function () {
    $("#panel5").slideToggle("slow");
});
$("#flip8").click(function () {
    $("#panel5").slideToggle("slow");
});
$("#flip9").click(function () {
    $("#panel5").slideToggle("slow");
});


$('.slick-card').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
})