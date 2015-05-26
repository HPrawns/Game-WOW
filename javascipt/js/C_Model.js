//模块子JS
//为string 添加类似c#的去空格方法
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}

//顶部的菜单栏,随着滚动条一直保持在屏幕上方
$(function () {
    var top = $(".nav").offset().top;
    var pos = $(".nav").css("position");
    var testtitle = $(".nav");
    testtitle.css("width", document.body.offsetWidth);
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
    AddMenu($("#NPC"));

    $("#bigDiv").click(function () {
        $(this).hide();
        $('body').css("overflow", "auto");
    });
});

//顶部下拉菜单(菜单栏可以附着顶部时使用)
function AddMenu(obj) {
    $(obj).hover(function () {
        var lefts = $(this).offset().left;
        $(this).children('ul').css("left", lefts);
        $(this).children('ul').stop(true, true).slideDown();
        BgColorChange($(obj).children(), "#0F95C0");
    }, function () {
        BgColorChange($(obj).children(), "#006592");
        $(this).children('ul').stop(true, true).slideUp();
    });
}
//对象,新颜色
function BgColorChange(obj, ncolor) {
    $(obj).css("background", ncolor);
}
//不同的时间线描述切换
function ChangeText(obj) {
    var data_type = $(obj).attr("data-type");
    var GroupData = $("pre[data-type='" + data_type + "']");
    if ($(GroupData[0]).attr("class") === "neirongclass") {
        $(GroupData[0]).attr("class", "neirongclass_n");
        $(GroupData[1]).attr("class", "neirongclass");
    }
    else {
        $(GroupData[1]).attr("class", "neirongclass_n");
        $(GroupData[0]).attr("class", "neirongclass");
    }
}

//点击图片看大图
function GetBigImg(obj) {
    var bigdiv = $("#bigDiv");
        $(bigdiv).empty();
        var imgsrc = $(obj).attr("src");
        if (imgsrc == "") { return;}
        $(bigdiv).append(" <img src=" + imgsrc + " width='100%'  height='100%'  id='' />");
        $('body').css("overflow", "hidden");
        $(bigdiv).show();
}