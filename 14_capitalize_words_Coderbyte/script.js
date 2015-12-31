$(document).ready(function() {

    function letterCapitalize(str) { 
        str = str.toString().split(' ');
        str = str.map(function(current, index, str) {
            if (current === '') return current;
            current = current.split('');
            current[0] = current[0].toUpperCase();
            return current = current.join('');
        });
        return str.join(' '); 
    }

    $('.capitalize').click(function() {
        var text = $('.data input').val();
        if (text === '' || !isNaN(text)) {
            $('.result p').html('Please enter some text in the field.');
        } else {
            $('.result p').html('Capitalized sentence is: <span>' + letterCapitalize(text) + '</span>');
        }
    });

});
