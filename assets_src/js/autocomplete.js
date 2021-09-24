jQuery(document).ready(function($){

    /*Filtre search item niveau 4*/
    $('body').on('keyup','.el-nv4-item-search-block .input-forms',function(){
        let valToTest = $(this).val().toLowerCase();
        $(this).parents('.el-nv4-item-search-block').next().find('.el-nv4-subitem').each(function(){
            let titleItem = $(this).find('.el-nv4-sub-title').html().toLowerCase();
            if(titleItem.startsWith(valToTest) || titleItem.includes(valToTest)){
                $(this).fadeIn(400);
            }
            else{
                $(this).fadeOut(400);
            }
        });
    });

    /*Filtre search procedure detail offre*/
    $('body').on('keyup','.filter-custom input',function(){
        let valToTest = $(this).val().toLowerCase();
        $(this).parents('.filter-custom').next().find('.item').each(function(){
            let titleItem = $(this).find('h4').html().toLowerCase();
            if(titleItem.startsWith(valToTest) || titleItem.includes(valToTest)){
                $(this).fadeIn(400);
            }
            else{
                $(this).fadeOut(400);
            }
        });
    });

    /*Filtre search item discours*/
    $('body').on('keyup','.tab-content-filter .el-nv4-item-search-block .input-forms',function(){
        let valToTest = $(this).val().toLowerCase();
        $(this).parents('.tab-content-filter').next().find('.el-nv4-subitem').each(function(){
            let titleItem = $(this).find('h4').html().toLowerCase();
            if(titleItem.startsWith(valToTest) || titleItem.includes(valToTest)){
                $(this).fadeIn(400);
            }
            else{
                $(this).fadeOut(400);
            }
        });
    });
});