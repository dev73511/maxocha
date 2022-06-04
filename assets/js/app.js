'use strict'

$(document).ready(function () {
    console.log("APP JS LOADED");
    
    AOS.init()
    
    $('.navbar-collapse.collapse').click(function(){
        $('.navbar div').removeClass('show');
    });  


    $('.benifitesSyncListImageSlider.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        items: 3,
        center: true,
        nav:true,
        dots: false,
        autoplay: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive:{
            0:{
                items: 1,
                margin: 0,
                dots: true,
                nav: true
            },
            768: {
                items: 2,
                dots: true,
            },
            1000:{
                items:2.3,
                dots: false,
            }
        }
    })


    // accord start
    $(".accord-head").on("click", function (e) {

        console.log("in accordian")

        var dropDown = $(this).closest('.accord-row').find('.accord-content');
        $(this).closest('.accord-wrap').find('.accord-content').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accord-wrap').find('.accord-head.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();
        e.preventDefault();

    });
    // accord end
})