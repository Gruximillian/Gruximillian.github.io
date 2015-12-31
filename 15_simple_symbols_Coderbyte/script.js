$(document).ready(function() {

    function simpleSymbols(str) {
        var len = str.length,
            correct = true;
        str = str.split('');
        for (var i = 0; i < len; i++) {
            if (str[i].match(/[a-z]/i) && (str[i - 1] !== '+' || str[i + 1] !== '+') ) {
                correct = false;
            }
        }
        return correct; 
    }

    $('.test-string').click(function() {
        var string = $('.data input').val();
        if (string === '') {
            $('.result p').html('Please enter a string in the input field.');
        } else {
            $('.result p').html('String you entered is: <span>' + simpleSymbols(string) + '</span>');
        }
    });

});
