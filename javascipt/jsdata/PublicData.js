//特殊词条
var npcdata =
{
    "[安度因]": "蒂芬与瓦里安·乌瑞恩之子，安度因·莱恩·乌瑞恩是暴风城的王位继承人。",
    b: "我是b"
}
$(function () {
    $("span[data-tooltip]").bind('mouseover', function () {
        $(this).attr("data-tooltip", AddTitle($(this)));
    });
});
function AddTitle(obj) {
    var npcname = $(obj).html().toString().trim();
    return npcdata[npcname] === undefined ? "此词条暂时无说明!" : npcdata[npcname];
}