$(function () {
    // Keyup event tracker on the textarea element
    $('textarea').on('keyup', function(){
        // Text area is called
        let charsN = 280 - $(this).val().length;
        // 280 used as twitter value
        // Traversing the DOM to find the element with the class counter
        // $() jQuery selector required on this
        // .parent .find jQuery traversing methods chained
        let counter = $(this).parent().find('.counter');
        counter.text(charsN);

        if (charsN < 0) { // Error when no chars remaining
            // Add class to the counter element
            counter.addClass('error')
            counter.removeClass('warning')
        } else {
            counter.removeClass('error')
            counter.removeClass('warning')
        }
    });
})