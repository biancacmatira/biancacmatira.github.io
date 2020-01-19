$(document).ready(function () {
    // .scroll() creates an event when the user scrolls
    $(window).scroll(function () {
        // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
        var scroll = $(window).scrollTop();
        var objectSelect = $('#about');
        // .offset() retrieves current position of element relative to document
        var objectPosition = objectSelect.offset().top;
        if (scroll > objectPosition) {
            $('#navbar').addClass('displayNav');
        } else {
            $('#navbar').removeClass('displayNav');
        }
    });
});