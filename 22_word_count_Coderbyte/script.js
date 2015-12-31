$(document).ready(function() {

    function wordCount(str) {
        var wordsNum = 0,
            len;
        str = str.split(' ');
        len = str.length;
        for (var i = 0; i < len; i++) {
            if (str[i].trim() !== '') wordsNum++; // If words are separated by more than one space, we will have empty strings in the array, which we do not count
        }
        return wordsNum;
    }

    $('.count').click(function() {
        var string = $('.data input').val(),
            message = '';
        if (string === '') {
            message = 'Please enter a string in the field.';
        } else {
            message = 'Alphabetized string is: <span>' + wordCount(string) + '</span>';
        }
        $('.result p ').html(message);
    });

});
