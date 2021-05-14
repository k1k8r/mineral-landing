$(document).ready(function() {
    $('.slider-index').slick({
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToScroll: 2,
        slidesToShow: 4,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToScroll: 2,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 411,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            }
        ]
    });
});