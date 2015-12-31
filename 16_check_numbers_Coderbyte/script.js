$(document).ready(function() {

    function getNums(data) {
        var num1 = $(data).find('.number1').val(),
            num2 = $(data).find('.number2').val();
        if (num1 === '' || num2 === '' || isNaN(num1 * 1) || isNaN(num2 * 1)) {
            return false;
        } else {
            return [num1 * 1, num2 * 1];
        }
    }

    function checkNums(array) {
        var num1 = array[0],
            num2 = array[1];
        if (num2 > num1) {
            return true;
        } else if (num2 === num1) {
            return -1;
        } else return false;
    }

    $('.compare').click(function() {
        if (getNums('.data')) {
            $('.result p').html('Number 2 is greater than number 1: <span>' + checkNums(getNums('.data')) + '</span>');
        } else {
            $('.result p').html('Please enter numbers in the fields on the left.');
        }
    });

});
