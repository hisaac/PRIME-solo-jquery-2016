/* For pro mode, I challenged myself to refactor the code from hard mode into
    as few lines as possible, and use no variables. It's incredibly hard to
    read, but it works! */

$(document).ready(function(){
    $('button').on('click', function(){
        $('.container').append('<div class="color-cube ' + $(this).data('color') + '"></div>');
        $('#' + $(this).data('color')).text('Total ' + $(this).data('color') + ': ' + (Number($(window[$(this).data('color')]).prop('outerHTML').match(/\d+/g)) + 1));
    });
});
