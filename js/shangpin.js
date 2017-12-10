/**
 * Created by 123 on 2017/9/15.
 */
$(function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 30,
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
    });


    //客服
    $(".head_all img").click(function(){
        $(".cover").css("display","block")
    })
    //关闭客服
    $(".tuichu p").click(function () {
        $(".cover").css("display","none")
    })

    //挑选
    $(".yanse_2 li").click(function () {
        $(".yanse_2 li").css("border","2px solid #d2d2d2")
        $(".yanse_2 li").removeClass("b")
        $(this).css("border","2px solid #ff6262")
        $(this).addClass("b")
    })
    $(".chima_2 li").click(function () {
        $(this).css("border","2px solid #ff6262")
        $(this).addClass("b")
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
    //切换
    $("#xinxi_t").click(function () {
        if($("#fuwu_t").hasClass("a")){
            $("#fuwu_t").removeClass("a")
            $("#xinxi_t").addClass("a")
            $(".xian").animate({"left":"0"})
            $(".fuwu").hide()
            $(".xinxi").show()
        }
    })
    $("#fuwu_t").click(function () {
        if($("#xinxi_t").hasClass("a")){
            $("#xinxi_t").removeClass("a")
            $("#fuwu_t").addClass("a")
            $(".xian").animate({"left":"50%"})
            $(".fuwu").show()
            $(".xinxi").hide()
        }
    })


    //地址解析
    var url = window.location.href;
    var myURL = parseURL(url);
    var _id = myURL.params.id;


    //点击加入购物车按钮
    $(".foot li").eq(1).click(function(){

        localStorage.setItem("id",_id);

    })
})