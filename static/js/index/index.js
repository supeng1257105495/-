/**
 * Created by Administrator on 2017/5/16/016.
 */
    //swiper
window.onload = function() {
    var swiper = new Swiper('.swiper-container', {
        loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect : 'fade',
        autoplay: 3000,
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }

    });
};

//png gif切换
$(".sp-a").hover(function(){
    var $index = $(this).index();
    $(this).find(".col-md-3").append("<span class='remove'>+</span>").stop(true,true);
    $(this).find(".gif").attr("src","../img/lunbo/"+$index+".gif")
},function(){
    var $index = $(this).index();
    $(".remove").remove();
    $(this).find(".gif").attr("src","../img/lunbo/"+$index+".png")
});
//平台服务
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

//动画调用
window.scrollReveal = new scrollReveal({reset: true, move: '50px'});