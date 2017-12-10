$(function () {
    var num = 0;
    var text;
    $("#phone").focusout(function(){
       text = $("#phone").val()
        function getCookie(name)
        {
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        }
        var re = getCookie('id');

        //获取cookie中的ID
        if(re != text){
            $(".tishi").eq(0).show();
            num = 0;
        }
        else{
            num = 1;
            $(".tishi").eq(0).hide();
        }
    })

    $("#ps").focusout(function(){
        var pwd = $("#ps").val()
        function getCookie(name)
        {
            var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr=document.cookie.match(reg))
                return unescape(arr[2]);
            else
                return null;
        }
        var pass = getCookie('pwd');
        if(pwd != pass){
            $(".tishi").eq(1).show()
            num = 0;
        }
        else{
            $(".tishi").eq(1).hide()
            num = 1;
        }
    })
    $(".btn_left").click(function(){
        if(num==1){
            localStorage.setItem("mz",text)
            window.location.href='mine.html?number=4';
        }
        else{
            alert("用户信息有误，请重新输入！");
        }
    })
    $(".btn_right").click(
        function () {
            window.location.href='zhuce.html';
        }
    )
})
