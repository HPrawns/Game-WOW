var sheight = 0;
var swidth = 0;
var sheightpoint = 0.0;
//图片地址路径
var imgurl = [
{
    url: "/img/Wow_img/s1.jpg",
    title: "霜火岭"
},
{
    url: "/img/Wow_img/s2.jpg",
    title: "霜火岭"
},
{
    url: "/img/Wow_img/s3.jpg",
    title: "霜火岭"
},
{
    url: "/img/Wow_img/y1.jpg",
    title: "影月谷"
},
{
    url: "/img/Wow_img/y2.jpg",
    title: "影月谷"
},
{
    url: "/img/Wow_img/y3.jpg",
    title: "影月谷"
}
]; //地址数组

//模块子JS
//为string 添加类似c#的去空格方法
String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}
var img_i = 0;
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
    sheight = window.screen.height
    swidth = window.screen.width;

    sheightpoint = sheight - 95 - 28;          //用于计算浏览器内的实际高度


    MainPicture();              //首页图片加载
    $("#bigDiv").click(function () {
        $(this).hide();
        $('body').css("overflow", "auto");
    });
    $("#LastButton").click(function () {
        img_i--;
        if (img_i < 0) {
            img_i = imgurl.length - 1;
        }
        imgcg(img_i);

    });
    $("#NextButton").click(function () {
        img_i++;
        if (img_i >= imgurl.length) {
            img_i = 0;
        }
        imgcg(img_i);
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
    var GroupData = $("div[data-type='" + data_type + "']");
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
//背景图片切换
function imgcg(index) {
    var sWidth = $("#pictures").width(); //获取焦点图的宽度（显示面积）
    var len = $("#pictures ul li").length; //获取焦点图个数

    $("#pictures ul").css("width", sWidth * (len));
    var nowLeft = -index * sWidth;
    $("#pictures ul").stop(true, false).animate({ "left": nowLeft }, 300);
    index++;
}
//首页加载图片
function MainPicture() {
    var picdiv = $("#pictures");
    var picul = $("<ul></ul>");
    picdiv.append(picul);
    for (var i = 0; i < imgurl.length; i++) {
        picul.append($("<li><img src='" + imgurl[i].url + "' /></li>"));
    }
    picdiv.append('  <a style="position: inherit; top: 600px; left: 15px" class="picturebtn" id="LastButton">&nbsp&nbsp＜&nbsp&nbsp</a> <a style="position: inherit; top: 600px; left: 870px" class="picturebtn" id="NextButton">&nbsp&nbsp＞&nbsp&nbsp</a>');
}
