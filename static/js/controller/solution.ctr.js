/**
 * Created by Administrator on 2017/5/18/018.
 */
var myapp = angular.module('myapp');
myapp.controller('solutionctr',['$scope',function($scope){
    //企业切换
    //$(".footer-one").hide();
    //$(".footer-one:first").show();
    $(".all").hover(function(){
        var $index = $(this).index();
        $(".footer-one").hide();
        $(".footer-one").eq($index).show();
    });
    $(function () {
//手风琴点击效果
        $('.panel-heading:eq(0)').css({"background":"#000","color":"#fff"});
        $('.panel-heading:eq(0)').find(".so-fr").css("backgroundPosition","-234px 0");
        $(".panel-heading").click(
            function () {

                $('.panel-heading').css({"background":"#f5f5f5","color":"#000"});
                $(this).css({"background":"#000","color":"#fff"});
                $('.so-fr').css("backgroundPosition","-196px 0px ");
                $(this).find(".so-fr").css("backgroundPosition","-234px 0");
            }
        );
    });
}]);
