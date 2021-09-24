jQuery(document).ready(function($){

    /*toggle accordion faq via faq header*/ 
    $("body").on("click", ".accordion-faq .accordion-faq-header", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active").next().slideToggle(300);
        $(this).find('.ico-arrow-simple').toggleClass('rotate180');
    });

    /*toggle accordion faq via icon faq header*/ 
    $("body").on("click", ".accordion-faq .ico-arrow-simple", function (e) {
        e.stopPropagation();
        $(this).parents('.accordion-faq-header').toggleClass("active").next().slideToggle(300);
        $(this).toggleClass('rotate180');
    });

    /*toggle accordion standard via faq header*/ 
    $("body").on("click", ".accordion-standard .accordion-faq-header", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active").next().slideToggle(300);
    });

    /*toggle accordion standard via icon faq header*/
    $("body").on("click", ".accordion-standard .ico-arrow-simple", function (e) {
        e.stopPropagation();
        $(this).parents('.accordion-faq-header').toggleClass("active").next().slideToggle(300);
    });
      
});
