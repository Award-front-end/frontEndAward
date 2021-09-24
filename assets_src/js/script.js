jQuery(document).ready(function($){
    /*Dropdown alert*/
    $('body').on('click','.notif-button',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.block-connecter-dropdown').removeClass('show');
        $('.notif-button').not($(this)).next().removeClass('show');
        $('.block-connecter-dropdown').removeClass('show');
        $('.notif-button').removeClass('active');
        $(this).toggleClass('active');
        $(this).next().toggleClass('show');
    });

   /* /!*Menu connecter dropdown*!/
    $('body').on('click','.link-action',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.notif-dropdown').removeClass('show');
        $(this).parents('.block-connecter-top').next().toggleClass('show');
    });*/

    $(document).click(function(e) {
        e.stopPropagation();
        var container = $(".notif-item");
    
        //check if the clicked area is dropDown or not
        if (container.has(e.target).length === 0) {
            $('.notif-button').removeClass('active');
            $('.notif-dropdown').removeClass('show');
        }

        if($('.block-connecter-dropdown').hasClass('show')){
            $('.block-connecter-dropdown').removeClass('show');
        }

        if($('.sort-dropdown').is(":visible")){
            $('.sort-dropdown').fadeOut();
        }

        if($('.dropdown-menu-filter').is(":visible")){
            $('.dropdown-menu-filter').fadeOut();
        }
    })

    /*Dropdown sort details gamme*/
    $('body').on('click','.action-sort-link',function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).next().fadeToggle();
    });

    /*Change header iframe embed PDF*/
    $(".pdf-block-container iframe").on("load", function() {
        let head = $(".pdf-block-container iframe").contents().find(".sdk-HeaderView-header");
        let css = '<style>.sdk-HeaderView-header{background-color: #525252;}</style>';
        $(head).append(css);
    });

    /*Gestion state active icon favoris details procédure/contractuels/offre*/
    // $('body').on('click','.btn-add-fav',function(e){
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    // });

    $('body').on('click','.btn-add-tool',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.vignette-item').toggleClass('vignette-tool-box');
    });

    // $('body').on('click','.btn-suppr',function(e){
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    // }); 

    $('body').on('click','.btn-lu',function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parents('.notif-dropdown-item').toggleClass('lu');
    })

    /*event click tag liste outils*/
    $('body').on('click','.btn-filter-tag',function(e){
        e.preventDefault();
        $('.btn-filter-tag').not($(this)).removeClass('active');
        $(this).toggleClass('active');
    })

    /*Add class table et div block table pour WYSSIWWG*/
    $('.detail-autre').find('table').wrap("<div class='tableBlock'></div>");
    $('.detail-autre').find('table').addClass('table-standard');

    /*Add div block pour video dans WYSSWIG*/
    $('.detail-autre').find('video').wrap("<div class='videoBlock'></div>");
    $('.videoBlock').append("<a href='' class='btn btn-start-video'><i class='ico-play'></i></a>");
    $('.detail-autre').find('video').addClass('video-standard');

    //event click btn-desc-complete
    $("html, body").on("click", ".link-condition", function(e){
        e.preventDefault();
        // enregistre la valeur de l'attribut href dans la variable target
        var target = $(this).attr('href');
        
        /* le sélecteur $(html, body) permet de corriger un bug sur chrome 
        et safari (webkit) */
        $('html, body')
        // on arrête toutes les animations en cours
        .stop()
        /* on fait maintenant l'animation vers le haut (scrollTop) vers 
            notre ancre target */
        .animate({scrollTop: $(target).offset().top }, 2500, 'easeInOutExpo');

        if(!$('.tab-promotions .tab-promotions-nav li:last').hasClass('disabled')){ 
            $('.tab-promotions .tab-promotions-nav li:last a').trigger('click');
        }
        else{
            $('.tab-promotions .tab-promotions-nav li:first a').trigger('click');
        }
    });
    
})



