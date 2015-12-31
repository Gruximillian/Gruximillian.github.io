$(document).ready(function() {

    function getNumber(input) {
        var num = $(input).val();
        if (num === '') return;
        return Math.abs(num * 1);
    }

    function timeConvert(num) {
        var h = 0,
            m = 0,
            time = '';
        if (num < 60) {
            time = '0:' + num;
        } else {
            m = num % 60;
            h = parseInt(num / 60);
            time = h + ':' + m;
        }
        return time;
    }

    $('.convert').click(function() {
        var num = getNumber('.data input');
        if (isNaN(num)) {
            $('.result p').html('Please enter an integer in the field.');
        } else {
            $('.result p').html('Your time is: <span>' + timeConvert(num) + '</span>');
        }
    });

});
