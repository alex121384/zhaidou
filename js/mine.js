/**
 * Created by 123 on 2017/9/18.
 */
$(function(){
    $("#foot").load("foot.html")


    var aa = localStorage.getItem("mz")
    if(aa != null){
        $(".kehu_in>p span").hide()
        var oLi = $("<p>"+"您好,"+aa+"</p>")
        oLi.appendTo($(".kehu_in>p"))
    }
})