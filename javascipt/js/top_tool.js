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
    AddMenu($("#Story"));
    AddMenu($("#King"));
    AddMenu($("#History"));
});
//顶部下拉菜单(菜单栏可以附着顶部时使用)
function AddMenu(obj) {
    $(obj).hover(function () {
        var lefts = $(this).offset().left;
        $(this).children('ul').css("left", lefts);
        $(this).children('ul').stop(true, false).slideDown();
        BgColorChange($(obj).children(), "#0F95C0");
    }, function () {
        BgColorChange($(obj).children(), "#006592");
        $(this).children('ul').stop(true, false).slideUp();
    });
}
//对象,新颜色
function BgColorChange(obj, ncolor) {
    $(obj).css("background", ncolor);
}