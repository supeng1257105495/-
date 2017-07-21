/**
 * Created by Hzh on 2017/5/16.
 */
$(document).ready();
$('.topNav').find('li').hover(function () {
    $('.topNav').find('li').removeClass('active');
    $(this).addClass('active');
    $(this).animate({left: '+50px'}, "slow");
},function(){
    $(this).removeClass('active');
});

$('.free>a').hover(function () {
    $(this).css({'background':'#1084D5'});
},function () {
    $(this).css({'background':'none'});
});

$('#solve').hover(function () {//解决方案滑动上去效果
    $('.down-ease').slideDown(500);
    $('.solve-content').show();
    $('.suc-case').hide();
    $('.about-content').hide();
    $('.down-li').find('li').hover(function () {
        $(this).css({'background': '#1084D5'});
        var $index = $(this).index();
        $('.dla-a').find('div').hide();
        $('.dla-a>div').eq($index).fadeIn(30).stop(true,true);
    }, function () {
        $(this).css({'background': 'none'});
    });
});
$(".other").hover(function(){
    $('.down-ease').slideUp(500);
})
$('#succ-case').hover(function () {//成功案例
    $('.down-ease').slideDown(500);
    $('.solve-content').hide();
    $('.suc-case').show();
    $('.about-content').hide();
    $('.down-li').find('li').hover(function(){
        $(this).css({'background':'#1084D5'})
    },function(){
        $(this).css({'background':'#3F4347'})
    });
});

$('#about-us').hover(function () {
    $('.down-ease').slideDown(500);
    $('.solve-content').hide();
    $('.suc-case').hide();
    $('.about-content').show();
    $('.down-li').find('ul').find('li').hover(function () {
        $(this).css({'background': '#1084D5'});
        var $index = $(this).index();
        $('.dla-a').find('section').hide();
        $('.dla-a>section').eq($index).fadeIn(30);
    }, function(){
        $(this).css({'background': 'none'});
    });
});
$('.down-ease').hover(function(){},function(){
    $('.down-ease').slideUp(500);
});

window.scrollReveal = new scrollReveal({reset: true, move: '100px'});