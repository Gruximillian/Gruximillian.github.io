$(document).ready(function() {

    function vowelCount(str) {
        var vowels = ['a','e','i','o','u'],
            vowelsCount = 0,
            len;
        str = str.split('');
        len = str.length;
        for (var i = 0; i < len; i++){
            if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
                vowelsCount++;
            }
        }
        return vowelsCount;
    }

    $('.count').click(function() {
        var string = $('.data input').val(),
            message = '';
        if (string === '') {
            message = 'Please enter a string in the field.';
        } else {
            message = 'Number of vowels in the string is: <span>' + vowelCount(string) + '</span>';
        }
        $('.result p ').html(message);
    });

});
