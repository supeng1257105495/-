/**
 * Created by Administrator on 2017/5/15/015.
 */

$(".all").hover(function(){
    var $index = $(this).index();
    $(".footer-one").hide();
    $(".footer-one").eq($index).show();
    $(".all").eq($index).css({
        background:"#000",
        color:"#fff"
    })
},function(){
    $(".footer-one").hide();
    $(".footer-one-a").show();
    var $index = $(this).index();
    $(".all").eq($index).css({
        background:"#f5f5f5",
        color:"#000"
    })
});



//¶¯»­µ÷ÓÃ
window.scrollReveal = new scrollReveal({reset: true, move: '50px'});