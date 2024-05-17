$(document).ready(function(){
    $(".kayan-yazi").each(function(){
        var $this = $(this);
        $this.wrapInner("<span class='kayan-yazi-icerik'></span>");
        $this.css("overflow", "hidden");
        $this.find(".kayan-yazi-icerik").css({ "display": "inline-block", "position": "relative" });
        var animasyonMesafe = $this.width();
        function animasyon() {
            $this.find(".kayan-yazi-icerik").animate({ marginLeft: -animasyonMesafe }, 5000, "linear", function(){
                $(this).css("marginLeft", animasyonMesafe);
                animasyon();
            });
        }
        animasyon();
    });
});