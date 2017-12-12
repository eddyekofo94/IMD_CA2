var scrolling = false;
var currentPos = 0;

function scrollUp(){
    if(!scrolling && currentPos > 0 ){
        scrolling=true;
        currentPos --;
        var scrollToElement = $('.scrollTo')[currentPos];

        $('html, body').animate({
            scrollTop: $(scrollToElement).offset().top
        }, 1000, function(){
            scrolling = false;
        });
    }
}

function scrollDown(){
    if(!scrolling && currentPos < $('.scrollTo').length-1  ){
        scrolling=true;
        currentPos ++;
        var scrollToElement = $('.scrollTo')[currentPos];

        $('html, body').animate({
            scrollTop: $(scrollToElement).offset().top
        }, 1000,function(){
            scrolling = false;
        });
    }
}

$(document).ready(function() {

    // Get the current position on load

    for( var i = 0; i < $('.scrollTo').length; i++){
        var elm = $('.scrollTo')[i];

        if( $(document).scrollTop() >= $(elm).offset().top ){
            currentPos = i;
        }
    }

    $(document).bind('DOMMouseScroll', function(e){
        if(e.originalEvent.detail > 0) {
            scrollDown();
        }else {
            scrollUp();
        }
        return false;
    });

    $(document).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            scrollDown();
        }else {
            scrollUp();
        }
        return false;
    });
});