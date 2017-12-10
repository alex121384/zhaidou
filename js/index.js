/**
 * Created by 123 on 2017/9/14.
 */
$(function () {
    //引入头尾
    $("#head").load("head.html")
    $("#foot").load("foot.html")
    //顶部轮播
    var mySwiper = new Swiper ('.swiper-container', {
        //竖直轮播
        //direction: 'vertical',
        observer:true,//修改自己或子元素时 最懂初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay:4000,
        autoplayDisableOnInteraction : false,

        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable :true,
    })


    //改造案例
    var star = 0;
    var num = 8;
    var b = 1;
    function get_data(star,num){
        $.get('index.json',function(data){
            var cc = eval(data);
            var arr = cc["list"];
            var l = arr.length;
            if((star+num) >= l){
                num = l - star;
                b = 0;
            }
            for(var i = star;i<(star+num);i++){
                var oli =
                    $("<li><img src='"+arr[i].coverImg+"'>" +
                        "<h1>"+arr[i].title+"</h1>"+
                        "<p>"+
                        "<span class='s1'>"+arr[i].text+"</span>"+
                        "<span class='s2'>"+arr[i].people+"</span>"+
                        "</p>"+
                        "</li>");
                $(oli).appendTo($(".anli_al"))
            }
        })
        return star+num;
    }
    star = get_data(star,num);
    $(".jiazai").click(function(){
        if(b == 0){
            $(".jiazai").html("加载完毕")
        }else{
            star = get_data(star,num);
        }
    })
    //关闭客服
    $(".tuichu p").click(function () {
        $(".cover").css("display","none")
    })


    $(".anli_al li").live("click",function () {
        window.location.href = "danya.html";
    })
})