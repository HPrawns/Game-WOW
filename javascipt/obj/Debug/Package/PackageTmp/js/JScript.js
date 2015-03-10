jQuery("#main-body-bg").fadeOut("slow", function () {
    jQuery("#main-body-bg").css("background", "url(" + slides[newSlideIndex][0] + ") no-repeat top left");
    jQuery("#main-body-bg").fadeIn("slow");
});