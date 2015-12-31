$(document).ready(function() {

    function simpleAdding(num) {
	    if (num === 0) {
        	return num;
        } else {
		    return num + simpleAdding(num - 1); 
        }
    }

    $('.calculate').click(function() {
        var numString = $('.data input').val(),
            numValue = numString * 1;
        if (numString === '' || isNaN(numValue) || parseInt(numValue) !== numValue || parseInt(numValue) < 0) {
            $('.result p').html('Please enter an positive integer in the input field.');
        } else {
            $('.result p').html('Numbers from 1 to ' + numValue + ', add up to: <span>' + simpleAdding(numValue) + '</span>');
        }
    });

});
