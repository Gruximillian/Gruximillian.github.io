$(document).ready(function() {

    function abCheck(str) { 
        var len = str.length;

        str = str.split('');
        for (var i = 0; i < len; i++) {
            if (str[i] === 'a') { // First find 'a' in the string
                for (var j = 0; j < len; j++) { // Then serach for 'b'
                    if (str[j] === 'b' && Math.abs(j - i) === 4) return true; // If 'b' is found check, if there are three characters between 'a' and 'b', if so, return true
                }
            }
        }
        return false; // If 'a' and 'b' are not found or they are not separated by exactly 3 characters, then return false
    }

    $('.check').click(function() {
        var string = $('.data input').val(),
            message = '';
        if (string === '') {
            message = 'Please enter a string in the field.';
        } else {
            message = 'Result of checking a string is: <span>' + abCheck(string) + '</span>';
        }
        $('.result p ').html(message);
    });

});
