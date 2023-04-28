$(".c-slider__slideshow").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
    fade: true,
});
$(".c-pickup__slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 2500,
    centerPadding: "4.48%",
    // variableWidth: true,
    prevArrow:
        '<button type="button" class="c-pickup__arrow c-pickup__arrow--prev"></button>',
    nextArrow:
        '<button type="button" class="c-pickup__arrow c-pickup__arrow--next"></button>',
    dotsClass: "c-pickup__dots",
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: "22%",
                arrows: false,
            },
        },
    ],
});


$(".c-header__spitem--menuicon").click(function(){
    $(".c-header__spgnav").addClass('is-show')
    $("#p-main").addClass('u-overflowhidden')
})
$(".c-header__subitem--closemenu").click(function(){
    $(".c-header__spgnav").removeClass('is-show')
    $("#p-main").removeClass('u-overflowhidden')

})
$(".c-header__close").click(function(){
    $(".c-header__spgnav").removeClass('is-show')
    $("#p-main").removeClass('u-overflowhidden')
})
