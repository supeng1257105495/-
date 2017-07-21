/**
 * Created by Administrator on 2017/5/16/016.
 */
var myapp = angular.module('myapp');

myapp.controller('indexctr',['$scope',function($scope){
    //swiper
    var swiper = new Swiper('.swiper-container', {
        loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect : 'fade',
        autoplay: 3000,
        onInit: function(swiper){ //Swiper2.x�ĳ�ʼ����onFirstInit
            swiperAnimateCache(swiper); //���ض���Ԫ��
            swiperAnimate(swiper); //��ʼ����ɿ�ʼ����
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //ÿ��slide�л�����ʱҲ���е�ǰslide����
        }
    });

    //png gif�л�
    $(".sp-fangan").hover(function(){
        var $index = $(this).index();
        $(this).find(".remove").show();
        $(this).find(".gif").attr("src","../img/lunbo/"+$index+".gif")
    },function(){
        var $index = $(this).index();
        $(".remove").hide();
        $(this).find(".gif").attr("src","img/lunbo/"+$index+".png")
    });

    //����
    $(".sp-tabcard:first").show();
    $(".sp-li").hover(function(){
        var $index = $(this).index();
        console.log($index);
        $(".sp-tabcard").hide();
        $(".sp-tabcard1").hide();
        $(".sp-tabcard").eq($index).show();
    },function(){
        $(".sp-tabcard").hide();
    });
    $(".sp-li1").hover(function(){
        var $index = $(this).index();
        console.log($index);
        $(".sp-tabcard1").hide();
        $(".sp-tabcard").hide();
        $(".sp-tabcard1").eq($index).show();
    },function(){
        $(".sp-tabcard1").hide();
    });
    $(".sp-li").mouseout(function(){
        var $index = $(this).index();
        $(".sp-tabcard").eq($index).show();
    });
    $(".sp-li1").mouseout(function(){
        var $index = $(this).index();
        $(".sp-tabcard1").eq($index).show();
    });

    //zi-index
}]);
