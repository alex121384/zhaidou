/**
 * Created by 123 on 2017/9/14.
 */
$(function(){
    //返回顶部
    $(".return").hide()
    $(window).scroll(function(){
        var pp = $(window).scrollTop();
        if(pp<1200){
            $(".return").hide()
        }
        if(pp>1200){
            $(".return").show()
        }
    })
    $(".return").click(function(){
        $("html,body").animate({"scrollTop":"0"})
    })
    //获取页面url传过来的参数
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    var Request = new Object();
    Request = GetRequest();

    var id = Request['id'];


    if(id=="1"){
        $(".foot li").eq(0).find("p").css("color","#3fcccb")
        $(".foot li").eq(0).find("i").css("background-position"," -7px -52px")
    }
    if(id=="2"){
        $(".foot li").eq(1).find("p").css("color","#3fcccb")
        $(".foot li").eq(0).find("i").css("background-position"," -7px -0px")
        $(".foot li").eq(1).find("i").css("background-position"," -167px -50px")
    }
    if(id=="3"){
        $(".foot li").eq(2).find("p").css("color","#3fcccb")
        $(".foot li").eq(0).find("i").css("background-position"," -7px -0px")
        $(".foot li").eq(2).find("i").css("background-position"," -248px -50px")
    }
    if(id=="4"){
        $(".foot li").eq(3).find("p").css("color","#3fcccb")
        $(".foot li").eq(0).find("i").css("background-position"," -7px -0px")
        $(".foot li").eq(3).find("i").css("background-position"," -328px -50px")
    }
})