jQuery(document).ready(function($){

    //Cache onglet step 2 après chargement page
    $('.tabs-stage .tab-content').hide();
    // $('.tabs-stage .tab-content:first').show();
    // $('.tabs-step-one-nav li:first').addClass('tab-active');

    // Change tab class and display content step 1 & 2
    $('body').on('click', '.tabs-step-one-nav a', function(event){
        event.preventDefault();
        $('.tabs-step-one-nav li').removeClass('tab-active');
        $(".tabs-nv3-block.rubrique-content").html("");
        $(this).parent().addClass('tab-active');
        $('.tabs-stage div').hide();
        $($(this).attr('href')).show();
        $('.btn-choice-2').removeClass('active');
        $('.search-advanced-block-bottom').hide();
    });


    $('.tabs-nv3-stage .tab-nv3-content').hide();
    $('.tabs-nv3-stage .tab-nv3-content').first().show();
    $('.tabs-nv3-nav li:first').addClass('tab-active');

    // Change tab class and display content step 3 & 4 
    $('body').on('click', '.tabs-nv3-nav a', function(event){
        event.preventDefault();
        $('.tabs-nv3-nav li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('.tabs-nv3-stage .tab-nv3-content').hide();
        $($(this).attr('href')).show();
    });
    
    //Gestion state active bouton step 2 tab
    $('body').on('click','.btn-choice-2',function(e){
        e.preventDefault();
        $('.btn-choice-2').removeClass('active');
        $(this).addClass('active');
        $('.search-advanced-block-bottom').show();
    });

    //event click bouton recherche item niveau 4 
    $('body').on('click','.btn-search-nv4',function(e){
        e.preventDefault();
        $(this).parents('.el-nv4-item-top').next().toggleClass('show');
    });

    /*Tab standard home page / détails offre & service */
    $('.tabsP-stage .tab-content').hide();
    $('.tabsP-stage .tab-content').first().show();
    $('.tab-promotions .tab-promotions-nav li:first').addClass('tab-active');
    $('.tab-offres .tab-promotions-nav li:first').addClass('tab-active');

    // Change tab class and display content step 3 & 4 
    $('body').on('click', '.tab-promotions .tab-promotions-nav a', function(event){
        event.preventDefault();
        $('.tab-promotions .tab-promotions-nav li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('.tabsP-stage .tab-content').hide();
        $($(this).attr('href')).show();
    });


    //event click btn-desc-complete
    $("html, body").on("click", ".btn-desc-complete", function(e){
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

        $('.tab-promotions .tab-promotions-nav li:first a').trigger('click');
    });

    /*event click button tab tabs-langue*/
    $('body').on('click','.tabs-langue .btn-white',function(){
        $('.accordion-standard .accordion-item').find('.accordion-faq-header').removeClass('active').next().slideUp(300);
    });


    /*Tab standard header */
    $('.tabsPr-stage .tab-content').hide();
    $('.tabsPr-stage .tab-content').first().show();
    $('.tab-notifications .tab-promotions-nav li:first').addClass('tab-active');

    // Change tab 
    $('body').on('click', '.tab-notifications .tab-promotions-nav a', function(event){
        event.preventDefault();
        $('.tab-notifications .tab-promotions-nav li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('.tabsPr-stage .tab-content').hide();
        $($(this).attr('href')).show();
    });

    $('.tabsOutil-stage .tab-content').hide();
    $('.tabsOutil-stage .tab-content').first().show();
    $('.tab-outils .tab-promotions-nav li:first').addClass('tab-active');

    // Change tab outils class and display content
    $('body').on('click', '.tab-outils .tab-promotions-nav a', function(event){
        event.preventDefault();
        $('.tab-outils .tab-promotions-nav li').removeClass('tab-active');
        $(this).parent().addClass('tab-active');
        $('.tabsOutil-stage .tab-content').hide();
        $($(this).attr('href')).show();
    });
});