$(function(){
    $("#phone").blur(function(){
        var text = $("#phone").val()
        var re = /^(1[0-9]\d{9}$)|(\w+)@[0-9a-z]+\.[a-z]+$/i;
        if(!(re.test(text))){
            $(".tishi").eq(0).show();
        }
        else{
            document.cookie="id="+text;
            $(".tishi").eq(0).hide();
        }
    })

    $('#ps').blur(function(){
        var pwd = $("#ps").val()
        var rw = /^\w{9}$/i;
        if(!(rw.test(pwd))){
            $(".tishi").eq(1).show();
        }
        else{
            document.cookie = "pwd="+pwd;
            $(".tishi").eq(1).hide();
        }
    })

    $('#pt3').blur(function(){

        var pwd = $('#ps').val();
        var pwd1 = $('#pt3').val()

        if(pwd!=pwd1){
            $('.tishi').eq(2).show();
        }else{
            $('.tishi').eq(2).hide();
        }
    });
    $(".btn").click(
        function () {
            var vl = $("input").val();
            if(vl!=0){
                window.location.href='login.html';
            }
            else{
                alert("请填写相应信息！")
            }
        }
    )
})