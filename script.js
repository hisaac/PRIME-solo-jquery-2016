var buttonPressed;
var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;

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
    switch (color) {
        case 'red':
            totalRed++;
            $('#' + color).text('Total red: ' + totalRed);
            break;
        case 'yellow':
            totalYellow++;
            $('#' + color).text('Total yellow: ' + totalYellow);
            break;
        case 'green':
            totalGreen++;
            $('#' + color).text('Total green: ' + totalGreen);
            break;
        case 'blue':
            totalBlue++;
            $('#' + color).text('Total blue: ' + totalBlue);
            break;
        default: alert('you broke me!');
    }
}
