$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__nav').click(function () {
        $('.header__burger, .header__nav').removeClass('active');
        $('body').removeClass('lock');
    });
});







