$(function () {

    $('.fourth__slider').slick({
        prevArrow: '<button type="button" class="arrows left_arrow"><img src="img/left_arrow.png" alt="#"></button>',
        nextArrow: '<button type="button" class="arrows right_arrow"><img src="img/right_arrow.png" alt="#"></button>'
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });



});