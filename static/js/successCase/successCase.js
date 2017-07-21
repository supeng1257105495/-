/**
 * Created by Administrator on 2017/5/17.
 */

    $(document).ready(function(){

        //点击展开折叠内容
        $(".su-show").hide();

        $(".su-click").click(function(){
            $(this).toggleClass("active");
            $(".su-show").slideToggle("slow");
            $(".su-click").hide();
            return false;
        });

        $("#su-show2").hide();
        $("#su-click2").click(function(){
            $(this).toggleClass("active");
            $("#su-show2").slideToggle("slow");
            $("#su-click2").hide();

            return false;
        });

//动画
        window.scrollReveal = new scrollReveal({reset: true, move: '100px'});

        //选中的背景变色
        $('.su-li:eq(0)').css({"background":"#000","color":"#fff"});
        $(".su-li").click(function () {
            $(".su-li").css({"background":"#f5f5f5","color":"#000"});
            $(this).css({"background":"#000","color":"#fff"});
        });







    });
