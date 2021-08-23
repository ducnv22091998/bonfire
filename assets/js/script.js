$(document).ready(function () {
    // Handler for .ready() called.
    // slider
    $(".featured-items-product-img-slider").slick({
        dots: false,
        fade: true,
        prevArrow: $('.action-slider--left'),
        nextArrow: $('.action-slider--right'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    arrows: false,
                },
            },
        ],
    });
    // customer slider click

});
