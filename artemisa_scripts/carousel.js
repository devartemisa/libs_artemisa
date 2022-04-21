$(document).ready(function() {
    jQuery(function($){
        $('.clients_carrusel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 900,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 1079,
                settings: {
                    slidesToShow: 2
                }
            }]
        });
    });
});
