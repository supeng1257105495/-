/**
 * Created by Hzh on 2017/5/17.
 */
window.scrollReveal = new scrollReveal({reset: true, move: '50px'});
var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    autoplay:2500,
    //loop:true,
    paginationType: 'fraction'
});
$('.swiper-button-prev').hover(function () {
    $(this).removeClass('swiper-button-black')
}, function () {
    $(this).addClass('swiper-button-black')
})
$('.swiper-button-next').hover(function () {
    $(this).removeClass('swiper-button-black')
}, function () {
    $(this).addClass('swiper-button-black')
})