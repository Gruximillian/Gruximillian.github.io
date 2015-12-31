$(document).ready(function() {

    function numberDash(number) {
        var dashedNumber = number.split(' ').join('').split(''); // Split on spaces, then join array, and then split again to strip all the white spaces

        dashedNumber = dashedNumber.map(function(element, index, dashedNumber) {
            return element * 1; // Turn elements of the array into numbers
        });

        for (var i = 0; i < dashedNumber.length - 1; i++) {
            if (dashedNumber[i] % 2 === 0 && dashedNumber[i + 1] % 2 === 0) {
                for (var j = dashedNumber.length; j > i; j--) {
                    dashedNumber[j] = dashedNumber[j - 1]; // If two adjacent digits are even then push all elements after first digit one position higher
                }
                dashedNumber[i + 1] = '-'; // Then add a dash after the first even digit
            }
        }

        return dashedNumber.join(''); // Finaly, join array into string
    }

    function numberIsInteger(numberString) {
        var number = numberString.split(' ').join('') * 1; // Split on spaces, then join array and then convert to number
        numberString = numberString.split(' ').join(''); // Split on spaces, then join array
        return (parseInt(number) === number && numberString); // Is number an integer and not an empty string
    }

    $('.dash-it').click(function() {
        var number = $('.data input').val(),
            message;

        if (numberIsInteger(number)) {
            message = 'Your dashed number is: <span>' + numberDash(number) + '</span>.'
        } else {
            message = 'Please enter an integer first.';
        }
        $('.result p').html(message);
    });

});
