$(document).ready(function() {



/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('.sort').click(function() {
        var string = $('.data input').val(),
            message = '';
        if (string === '') {
            message = 'Please enter a string in the field.';
        } else {
            message = 'Alphabetized string is: <span>' + alphabetSoupRecursive(string) + '</span>';
        }
        $('.result p ').html(message);
    });

});
