//-------------返回顶部-------------------------------原始
var scrolltotop = {
    setting: {
        startline: 150, //起始行
        scrollto: 0, //滚动到指定位置
        scrollduration: 400, //滚动过渡时间
        fadeduration: [500, 200] //淡出淡现消失
    },
    controlHTML: '<img src="../img/topback.gif" style="width:54px; height:54px; border:0;" />', //返回顶部按钮
    controlattrs: { offsetx: 80, offsety: 80 }, //返回按钮固定位置
    anchorkeyword: "#top",
    state: {
        isvisible: false,
        shouldvisible: false
    }, scrollup: function () {
        if (!this.cssfixedsupport) {
            this.$control.css({ opacity: 0 });
        }
        var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt
(this.setting.scrollto);
        if (typeof dest == "string" && jQuery("#" + dest).length == 1) {

            dest = jQuery("#" + dest).offset().top;
        }
        else {
            dest = 0;
        }

        this.$body.animate({ scrollTop: dest }, this.setting.scrollduration);
    }, keepfixed: function () {
        var $window = jQuery(window);
        var controlx = $window.scrollLeft() + $window.width() - this.$control.width() -
this.controlattrs.offsetx;

        var controly = $window.scrollTop() + $window.height() - this.$control.height() -
this.controlattrs.offsety;
        this.$control.css({ left: controlx + "px", top: controly + "px" });
    }, togglecontrol: function () {
        var scrolltop = jQuery(window).scrollTop();
        if (!this.cssfixedsupport) {
            this.keepfixed();
        }
        //--------------自定义动画  识别是否隐藏---------------
        this.state.shouldvisible = (scrolltop >= this.setting.startline) ? true : false;
        if (this.state.shouldvisible && !this.state.isvisible) {
            this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]);
            this.state.isvisible = true;
        } else {
            if (this.state.shouldvisible == false && this.state.isvisible) {
                this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]);
                this.state.isvisible = false;
            }
        }
    }, init: function () {
        jQuery(document).ready(function ($) {
            var mainobj = scrolltotop;
            var iebrws = document.all;
            mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" &&
window.XMLHttpRequest;
            mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") :
$("body")) : $("html,body");
            mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + "</div>").css({
                position: mainobj.cssfixedsupport ? "fixed" : "absolute", bottom: mainobj.controlattrs.offsety, right:
mainobj.controlattrs.offsetx, opacity: 0, cursor: "pointer"
            }).attr({ title: "" }).click(function () { mainobj.scrollup(); return false; }).appendTo("body"); if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") {
                mainobj.$control.css({
                    width: mainobj.$control.width()
                });
            } mainobj.togglecontrol();
            $('a[href="' + mainobj.anchorkeyword + '"]').click(function () {
                mainobj.scrollup(); return
                false;
            });
            $(window).bind("scroll resize", function (e) { mainobj.togglecontrol(); });
        });
    }
};

////------------向下--------------------        自己摸索
var index = 0;
var scrolldodown =
{
    setting: {
        startline: 2600, //起始行
        scrollto: 0, //滚动到指定位置
        scrollduration: 800, //滚动过渡时间
        fadeduration: [500, 200] //淡出淡现消失
    },
    controlHTML: '<img src="../img/down.png" style="width:54px; height:54px; border:0;" />', //返回顶部按钮
    controlattrs: { offsetx: 80, offsety: 10 }, //返回按钮固定位置
    anchorkeyword: "#down",
    state: {
        isvisible: true,
        shouldvisible: true
    },
    scrolldown: function () {

        this.setting.scrollto = $("#mdiv").children().last().offset().top;
        var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);

        this.$body.animate({ scrollTop: dest }, this.setting.scrollduration);
    },
    keepfixed: function () {
        var $window = jQuery(window);
        var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
        this.$control.css({ left: controlx + "px", top: 710 + "px" });
    },
    togglecontrol: function () {
        var scrolltop = jQuery(window).scrollTop();
        if (!this.cssfixedsupport) {
            this.keepfixed();
        }
        //--------------自定义动画  识别是否隐藏---------------
        this.state.shouldvisible = (scrolltop < this.setting.startline) ? true : false;
        if (this.state.shouldvisible && !this.state.isvisible) {
            this.$control.stop().animate({ opacity: 1 }, this.setting.fadeduration[0]);
            this.state.isvisible = true;
        } else {
            if (this.state.shouldvisible == false && this.state.isvisible) {
                this.$control.stop().animate({ opacity: 0 }, this.setting.fadeduration[1]);
                this.state.isvisible = false;
            }
        }
    },
    AddDiv: function () {
        var cout = datalist.length;
        if (index > cout - 1) { return false; }
        $("#mdiv").height(function (n, c) {
            return c + 712;
        });
        var htmltext = "";
        htmltext = "<div id='stdiv1' title='' class='stros'>";
        htmltext += "<div class='imgoutdiv' title='图片外层div'><div class='imgdiv picture'>";
        htmltext += "   <img src='../img/1407206818206.jpg' height='100%' width='100%' /></div>";
        htmltext += " <div class='imgdiv picture'>";
        htmltext += " <img src='../img/1407206818206.jpg' height='100%' width='100%' /></div> </div>";
        htmltext += "  <h3>这里是标题" + datalist[index].title + "</h3>";
        htmltext += "  <hr/>";
        htmltext += "<pre id='neirong' class='neirongclass' >";
        htmltext += datalist[index].context;
        htmltext += "</pre>";
        htmltext += "</div>"
        //$("#mdiv");
        //xdiv.append(htmltext);
        $("#mdiv").append(htmltext);
        index++;

    },
    init: function () {
        jQuery(document).ready(function ($) {
            var mainobj = scrolldodown;
            var iebrws = document.all;
            mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest;
            mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $("html") : $("body")) : $("html,body");
            mainobj.$control = $('<div id="topcontrol2">' + mainobj.controlHTML + "</div>").css({ position: mainobj.cssfixedsupport ? "fixed" : "absolute", bottom: mainobj.controlattrs.offsety, right: mainobj.controlattrs.offsetx, opacity: 1, cursor: "pointer" }).attr({ title: "" }).click(function () { mainobj.AddDiv(); mainobj.scrolldown(); return false; }).appendTo("body"); if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != "") { mainobj.$control.css({ width: mainobj.$control.width() }); } mainobj.togglecontrol();
            $('a[href="' + mainobj.anchorkeyword + '"]').click(function () { mainobj.scrolldown(); return false; });
            $(window).bind("scroll resize", function (e) { mainobj.togglecontrol(); });
        });
    }
}
scrolltotop.init();
scrolldodown.init();


