/**
 * Created by 123 on 2017/9/14.
 */
$(function(){
    //引入头尾
    $("#foot").load("foot.html")


    //客服
    $(".magic_all button").click(function(){
        $(".cover").css("display","block")
    })
    //关闭客服
    $(".tuichu p").click(function () {
        $(".cover").css("display","none")
    })
})