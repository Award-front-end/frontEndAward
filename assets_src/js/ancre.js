$(".scroll").click(function() {
    var c = $(this).attr("href");
    $('html, body').animate({ scrollTop: $("#" + c).offset().top + 1}, 1000, "swing");
    return false
});