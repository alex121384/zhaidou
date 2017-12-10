/**
 * Created by 123 on 2017/9/18.
 */
$(function(){

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
    $(".anli_al li").live("click",function () {
        window.location.href = "danya.html";
    })
})