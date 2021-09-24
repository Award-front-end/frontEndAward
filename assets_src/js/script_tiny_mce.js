jQuery(document).ready(function($) {

    /*Numerotation de H2 avec chiffre sur BO*/
    $(window).on('load',function(){

        $('h2.edm-custom-blue-h2-with-number').each(function (index) {
            $(this).html('<span style="color: #DD4444;">' + (index + 1) + '.</span> ' + $(this).text());
        });

    });

});
