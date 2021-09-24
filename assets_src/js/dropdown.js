jQuery(document).ready(function($){

    /*Dropdown filter event btn-filter*/
    $('body').on('click','.btn-filter',function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.dropdown-menu-filter').not($(this).next()).fadeOut(200);
        $(this).next().fadeToggle(200);
    });
      
});