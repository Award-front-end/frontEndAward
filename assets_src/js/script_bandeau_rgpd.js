
var COOKIE_BAR_NAME = 'edm_rgpd_&_cookies_bar';
// ------------------------------------------------------------------
jQuery(document).ready(function($){

    // HIDE COOKIES BAR
    $("#edm-rgpd-hide-button").click(function(){

        $("#edm-bandeau-rgpd-content").hide();
    });

    // J'ACCEPTE COOKIES
    $("#edm-rgpd-accept-button").click(function(){

        $("#edm-bandeau-rgpd-content").hide();
        createCookie(COOKIE_BAR_NAME,"true",365);
    });

    // TEST COOKIE BAR
    if (document.cookie.indexOf(COOKIE_BAR_NAME) != -1) {
        if (readCookie(COOKIE_BAR_NAME) === 'true') {
            $('#edm-bandeau-rgpd-content').remove();
        }
    }

});
// ------------------------------------------------------------------

// CREATION DE COOKIE
function createCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

// RECUPERATION DE VALEUR DE COOKIE
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// SUPPRESSION COOKIE
function eraseCookie(name) {
    createCookie(name,"",-1);
}
