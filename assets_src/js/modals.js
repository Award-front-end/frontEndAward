var lockDeleteFavoris = false;
jQuery(document).ready(function ($) {
    /*event bouton suppr favoris si pas ajouté dans boite à outils*/
    $('body').on('click', '.vignette-item .btn-delete-favoris', function (e) {
        e.preventDefault();
        let deleteId = $(this).data('delete');
        let isInToolbox = $('#btn-add-tool-' + deleteId);

        if (isInToolbox.hasClass('active') === true) {
            //Si ajouté dans la boite à outils
            $('.poppin-annulation-favoris-tool').fadeIn(400);
            $('body').on('click', '.poppin-annulation-favoris-tool', function(){
                $.ajax({
                    method : 'POST',
                    url : settings.ajaxUrl,
                    async : true,
                    data : {
                        action : 'bdc_delete_favoris',
                        delete_id : deleteId
                    },
                    dataType : 'json',
                    cache : false,

                    success : function (response) {
                        var plus2 = (response.length > 5) ? '+' : '',
                            all2 = (response.length > 5) ? 'Afficher tout' : '';
                        if (response.length < 1) {
                            $('.notif-button-favoris').html('');
                            $('.notif-button-favoris').html('<i class="icon ico-heart"></i>');
                        }

                        $('.notif-number-favoris').html(response.length + plus2);
                        $('.notif-number-plus').html('(' + response.length + plus2 + ')');
                        $('.link-all-notif-favoris').html(all2);
                        location.reload();
                    },

                    error : function (data) {
                    }
                });
            })

        } else {
            //Si pas ajouté dans la boite à outils
            $('.poppin-annulation-favoris').fadeIn(400);

            $('.btn-success-delete').on('click', function () {
                $('.notif-number-favoris').html('');
                $('.notif-number-plus').html('');
                $('.link-all-notif-favoris').html('');

                $.ajax({
                    method : 'POST',
                    url : settings.ajaxUrl,
                    async : true,
                    data : {
                        action : 'bdc_delete_favoris',
                        delete_id : deleteId
                    },
                    dataType : 'json',
                    cache : false,

                    success : function (response) {
                        console.log(response.length)
                        var plus2 = (response.length > 5) ? '+' : '',
                            all2 = (response.length > 5) ? 'Afficher tout' : '';
                        if (response.length < 1) {
                            $('.notif-button-favoris').html('');
                            $('.notif-button-favoris').html('<i class="icon ico-heart"></i>');
                        }

                        $('.notif-number-favoris').html(response.length + plus2);
                        $('.notif-number-plus').html('(' + response.length + plus2 + ')');
                        $('.link-all-notif-favoris').html(all2);
                        location.reload();
                    },

                    error : function (data) {
                    }
                });
            });

            $('.btn-annuler-delete').on('click', function () {
                return '';
            })

        }
    });

    /*Button close poppin*/
    $('body').on('click', '.button-close', function () {
        $(this).parents('.poppin-overlay').fadeOut(400);
    });


    $('body').on('click', '.btn-annuler', function () {
        $(this).parents('.poppin-overlay').fadeOut(400);
    });

    $('body').on('click', '.poppin-overlay', function () {
        $(this).fadeOut(400);
    });


});
