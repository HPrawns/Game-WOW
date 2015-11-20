//顶部下拉菜单(菜单栏可以附着顶部时使用)
function AddMenu(obj) {
    console.log(obj);
    $(obj).hover(function () {
        var lefts = $(this).offset().left;
        $(this).children('ul').css("left", lefts);
        $(this).children('ul').stop(true, false).slideDown();
        BgColorChange($(obj).children(), "#6C4B39");
    }, function () {
        BgColorChange($(obj).children(), "#3B241A");
        $(this).children('ul').stop(true, false).slideUp();
    });
}