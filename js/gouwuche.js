/**
 * Created by 123 on 2017/9/19.
 */
$(function () {
    //引入尾部
    $("#foot").load("foot.html")

    //导入购物车
    var oId=localStorage.getItem("id");
    $.get("tsconfig.json",function(data){
        var  _data = eval(data);
        $.each(_data,function(i){
            var oName = _data[i].name;
            if(oId == oName){
                var oLi = $("<li></li>")
                oLi.html("<div class='gou'>" +
                             "<div class='xuan'></div>" +
                         "</div>" +
                         "<img class='g_img' src='"+_data[i].list.img+"' />" +
                         "<div class='g_zi'>" +
                             "<h1 class='h'>"+_data[i].list.h+"</h1>" +
                             "<span class='s1'>" +_data[i].list.price+ "</span>" +
                             "<h2 class='hh'>"+_data[i].list.hh+"</h2>" +
                             "<span class='s2'>" +_data[i].list.old+ "</span>" +
                             "<div class='jian'>-</div>" +
                             "<input class='shu' value='1'>" +
                             "<div class='jia'>+</div>" +
                             "<div class='shanchu'>" +
                                 "<img id src='"+_data[i].list.img_s+"' />" +
                             "</div>" +
                         "</div>"
                )
                $(".content").append(oLi)
            }
        })
    })


    //增加减少数量
    $(".jian").live("click",function(){
        var index = $(this).next().val()
        index--;
        if(index<1){
            index=1;
        }
        $(this).next().val(index)
    })
    $(".jia").live("click",function(){
        var index = $(this).prev().val()
        index++;
        if(index>999){
            index=999;
        }
        $(this).prev().val(index)
    })

    $(".xuan").live("click",function(){
        if($(this).hasClass("a")){
            $(this).removeClass("a")
        }else{
            $(this).addClass("a")
        }
    })
    $(".xuan1").click(function(){
        if($(this).hasClass("a")){
            $(this).removeClass("a")
        }else{
            $(this).addClass("a")
        }
    })


    if(oId == null){
        $(".tixing").show()
    }else {
        $(".tixing").hide()
    }
})