$(function () {
    var top = $(".nav").offset().top;
    var pos = $(".nav").css("position");
    var testtitle = $(".nav");
    testtitle.css("width", document.body.offsetWidth);
    var scrolls = $(this).scrollTop();
    if (scrolls > top) {
        if (window.XMLHttpRequest) {
            testtitle.css("position", "fixed");
            testtitle.top = 0;
            testtitle.css("box-shadow", "1px 1px 1px 1px #888888");
        }
        else {
            testtitle.top = scrolls;
        }
    }
    else {
        testtitle.css("position", pos);
        testtitle.top = top;
        testtitle.css("box-shadow", "0px 0px 0px 0px #888888");
    }


    $(window).scroll(function () {
        var scrolls = $(this).scrollTop();
        if (scrolls > top) {
            if (window.XMLHttpRequest) {
                testtitle.css("position", "fixed");
                testtitle.top = 0;
                testtitle.css("box-shadow", "1px 1px 1px 1px #888888");
            }
            else {
                testtitle.top = scrolls;
            }
        }
        else {
            testtitle.css("position", pos);
            testtitle.top = top;
            testtitle.css("box-shadow", "0px 0px 0px 0px #888888");
        }
    });
    var arr = $(".nav li[sl='par']");
    for (var i = 0 ; i < arr.length; i++) {
        AddMenu($("#" + arr[i].id));
    }

});

//对象,新颜色
function BgColorChange(obj, ncolor) {
    $(obj).css("background", ncolor);
}