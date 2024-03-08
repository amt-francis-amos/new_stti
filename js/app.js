$(document).ready(function() {
    // -- HERO SLIDER
    var heroSlider = $('#hero-slider');

    heroSlider.on('refreshed.owl.carousel', function(event) {
        // Handle refresh event, if needed
    });

    heroSlider.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed:1000,
        navText:[ 'PREV', 'NEXT'],
        responsive:{
            0:{
                nav:false,
            },
            768:{
                nav:true,
            }
        }
    });

    // -- PROJECT SLIDER
    var projectSlider = $('#project-slider');

    projectSlider.on('refreshed.owl.carousel', function(event) {
        // Handle refresh event, if needed
    });

    projectSlider.owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        items:1,
        smartSpeed:1000,
        navText:[ 'PREV', 'NEXT'],
        responsive:{
            0:{
            },
            768:{
                items:2,
            },
            1140:{
                items:2,
                center:true,
            }
        }
    });
});
