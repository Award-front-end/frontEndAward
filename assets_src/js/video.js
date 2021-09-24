jQuery(document).ready(function($){
    /*Script Js play toogle button video show*/
    /*const video = document.querySelector("video");
    const circlePlayButton = document.querySelector(".btn-start-video");

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
        e.preventDefault();
    }

    circlePlayButton.addEventListener("click", togglePlay());
    video.addEventListener("playing", function () {
        circlePlayButton.style.opacity = 0;
    });
    video.addEventListener("pause", function () {
        circlePlayButton.style.opacity = 1;
    });*/
    if ( $(".video-standard").length > 0 ){
        $(".video-standard").get(0).pause();
        $('.video-standard').attr('controls',true);
    }


    /*event click button custom play*/
    $('body').on('click','.btn-start-video',function(e){
        e.preventDefault();
        $(this).fadeToggle(100);
        $(this).parents('.videoBlock').find('.video-standard').trigger('play');
    });

    /*Bind Play video*/
    if ( $(".video-standard").length > 0 ){
        $('.video-standard').bind('play', function (e) {
            $(this).siblings().fadeOut(200);
        });
    }


    /*Bind Pause video*/
    if ( $(".video-standard").length > 0 ){
        $('.video-standard').bind('pause', function (e) {
            $(this).siblings().fadeIn(200);
        });
    }

});