var sheight = 0;
var swidth = 0;
var sheightpoint = 0.0;
//图片地址路径
var imgurl = [
{
    url: "/img/s1.jpg",
    title: "霜火岭"
},
{
    url: "/img/s2.jpg",
    title: "霜火岭"
},
{
    url: "/img/s3.jpg",
    title: "霜火岭"
},
{
    url: "/img/y1.jpg",
    title: "影月谷"
},
{
    url: "/img/y2.jpg",
    title: "影月谷"
},
{
    url: "/img/y3.jpg",
    title: "影月谷"
}
]; //地址数组
var i = 0;
$(function () {
    sheight = window.screen.height
    swidth = window.screen.width;

    sheightpoint = sheight - 95 - 28;          //用于计算浏览器内的实际高度

    
    MainPicture();              //首页图片加载
    //$("#picture").css("background", "url(" + imgurl[0].url + ")");      //添加背景图片
    //$("#picture").css("background-size", "100%");

    // $("#picture").css("background", "url('" + imgurl[0].url + "')");

    $("#LastButton").click(function () {
        i--;
        if (i < 0) {
            i = imgurl.length - 1;
        }
        imgcg(i);

    });
    $("#NextButton").click(function () {
        i++;
        if (i >= imgurl.length) {
            i = 0;
        }
        imgcg(i);

    });
    AddMenu($("#Story"));
    AddMenu($("#King"));
    AddMenu($("#NPC"));
    AddMenu($("#OTHER"));

});

//-----------------------头部下来动态----------------------------------


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
    picdiv.append('  <a style="position: inherit; top: 600px; left: 15px" class="picturebtn" id="LastButton">Last</a> <a style="position: inherit; top: 600px; left: 890px" class="picturebtn" id="NextButton">Next</a>');
}
document.onmousemove = mouseMove;
function mouseMove(ev) {

    ev = ev || window.event;
    var mousePos = mouseCoords(ev);
    if (parseInt(mousePos.y) > sheightpoint) {

        $("#di").fadeIn("slow");
    }
    if (parseInt(mousePos.y) < sheightpoint) {
        $("#di").fadeOut("slow");
    }
}
function mouseCoords(ev) {
    if (ev.pageX || ev.pageY) {
        return { x: ev.pageX, y: ev.pageY };
    }
    return {
        x: ev.clientX + document.body.scrollLeft - document.body.clientLeft,
        y: ev.clientY + document.body.scrollTop - document.body.clientTop
    };
}
//背景变色方法
//对象,新颜色
function BgColorChange(obj, ncolor) {
    $(obj).css("background", ncolor);
}
//顶部下拉菜单
function AddMenu(obj) {
    $(obj).hover(function () {
        var tops = $(this).offset().top;
        var lefts = $(this).offset().left;
        $(this).children('ul').css("top", tops + 36);
        $(this).children('ul').css("left", lefts);
        $(this).children('ul').stop(true, true).slideDown();
        BgColorChange($(obj).children(), "#0F95C0");
    }, function () {
        BgColorChange($(obj).children(), "#006592");
        $(this).children('ul').stop(true, true).slideUp();
    });
}
