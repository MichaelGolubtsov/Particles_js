$(function() {

    $(".owl-carousel").owlCarousel({
        nav:false,
        dots: true,
        loop:true,
        margin: 15,
        navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'], //['Предыдущая','Следующая'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });



});


