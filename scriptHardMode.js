/* For hard mode, I wanted to try to iterate the counter without using global
    variables to track it. I used window[] to grab the element I was looking
    for, then used .prop('outerHTML') to extract just the HTML as a string. I
    then used regex (.match(/\d+/g)) to find just the numerical values in that
    string, and used Number() to convert it to a number data type. From there it
    was easy to iterate that and write it to the DOM using jQuery. */

var buttonPressed;

$(document).ready(function () {
    $('button').on('click', function(){
        buttonPressed = $(this).data('color');
        newBlock(buttonPressed);
        iterateCounter(buttonPressed);
    });
});

function newBlock(color){
    $('.container').append('<div class="color-cube ' + color + '"></div>');
}

function iterateCounter(color){
    var currentTotal = Number($(window[color]).prop('outerHTML').match(/\d+/g));
    currentTotal++;
    $('#' + color).text('Total ' + color + ': ' + currentTotal);
}
