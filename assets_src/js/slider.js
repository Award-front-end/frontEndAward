jQuery(document).ready(function($){
    
    /*Initialisation owl carousel image*/
    var owl = $('.slider-img').owlCarousel({
		mouseDrag: false,
		autoplay: false,
		margin: 0,
		autoWidth:false,
		autoHeight:true,
		slideTransition: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		autoplayTimeout:4000,
		autoplaySpeed:700,
		autoplayHoverPause:true,
        responsiveClass:true,
        dots:false,
        responsive:{
            1024:{
                items:3,
            },
            1441:{
                items:5,
            }
        }
    }) 

    /*slider-item click*/
    $('body').on('click','.slider-img .slider-item',function(){
        let urlImage = $(this).find('img').attr('src');
        $('.view-block-img').find('img').attr('src',urlImage);
    })

    // Go to the next item
    $('.btnNav-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.btnNav-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    /*Initialisation owl carousel alert*/
    var owl2 = $('.alert-slider').owlCarousel({
		mouseDrag: true,
		autoplay: false,
		margin: 0,
        nav: true,
		animateIn: 'fadeInRight',   // <-- class in animate CSS
        animateOut: 'fadeOutLeft',  // <-- class in animate CSS
        navContainer: '.navCustom',
        navText: [$('.nv-prev'),$('.nv-next')],
		autoWidth:true,
		autoHeight:true,
        items:1,
		slideTransition: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		autoplayTimeout:4000,
		autoplayHoverPause:true,
        dots:false
    });

    // Go to the next item
	$('.nv-prev').click(function(e) {
		e.preventDefault();
		owl2.trigger('next.owl.carousel');
		// return false;
	});

    /*Additional script JS toggle condition slider image*/
    if($('.slider-img').find('.owl-item').length ===1){
        $('.slider-img-container').hide();
    }
    else if($('.slider-img').find('.owl-item').length > 1 && $('.slider-img').find('.owl-item').length < 6){
        if (window.matchMedia("(max-width: 1440px)").matches) {
            $('.button-block').show();
        }
        else{
            $('.button-block').hide();
        }
    }

    /*Gestion manage resize event*/
    $(window).resize(function() {
        if (window.matchMedia("(max-width: 1440px)").matches) {
            /* La largeur maximale de l'affichage est 1440 px inclus */
            if($('.slider-img').find('.owl-item').length ===1){
                $('.slider-img-container').hide();
            }
            else if($('.slider-img').find('.owl-item').length > 1 && $('.slider-img').find('.owl-item').length < 6){
                $('.button-block').show();
            }
        } else {
            /* L'affichage est supérieur à 1440px de large */
            if($('.slider-img').find('.owl-item').length ===1){
                $('.slider-img-container').hide();
            }
            else if($('.slider-img').find('.owl-item').length > 1 && $('.slider-img').find('.owl-item').length < 6){
                $('.button-block').hide();
            }
        }
    });
		
	// Go to the previous item
	$('.nv-next').click(function(e) {
		e.preventDefault();
		owl2.trigger('prev.owl.carousel', [300]);
		// return false;
	});
});