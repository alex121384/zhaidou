/**
 * Created by 123 on 2017/9/17.
 */
$(function(){
    //客服
    $(".head_all img").click(function(){
        $(".cover").css("display","block")
    })
    //关闭客服
    $(".tuichu p").click(function () {
        $(".cover").css("display","none")
    })

    //评论
    $(".foot").click(function(){
        $(".pinglun").css("display","block")
        $(".p_content").removeClass("animated fadeInUp")
        $(".p_content").addClass("animated fadeInUp")
    })
    $(".ppp p").eq(0).click(function () {
        $(".pinglun").css("display","none")
    })


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


    //留言板
    $(".ppp p").eq(2).click(function(){
            var a = $("#pl").val();
            if(a != ""){
                $(".liuyanban").append("<P>"+$("#pl").val()+"</P>")
                $(".pinglun").css("display","none")
            }else {
            }
        }
    )
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

    var num = Request['number'];


    if(num=="1"){
        $(".foot li").eq(0).find("p").css("color","#3fcccb")
        $(".foot li").eq(0).find("i").css("background-position"," -7px -52px")
    }
})