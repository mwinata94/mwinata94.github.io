$(document).ready(function() {
    
    if ($(window).width() > $(window).height()) {
        $(document.body).addClass("landscape");
    } else {
        $(document.body).addClass("potrait");
    }

});

$(window).resize(function() {

    if ($(window).width() > $(window).height()) {
        $(document.body).addClass("landscape");
    } else {
        $(document.body).addClass("potrait");
    }
    
});