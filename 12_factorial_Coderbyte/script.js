$(document).ready(function() {

    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    $('.calculate').click(function() {
        var numString = $('.data input').val(),
            numValue = numString * 1;
        if (numString === '' || isNaN(numValue) || parseInt(numValue) !== numValue || parseInt(numValue) < 0) {
            $('.result p').html('Please enter an positive integer in the input field.');
        } else {
            $('.result p').html(numValue + '! = <span>' + factorial(numValue) + '</span>');
        }
    });

});
