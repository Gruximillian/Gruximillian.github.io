$(document).ready(function() {

    function getNumbers(element) {
       var nums = element.text().split(','); // We get array of strings

        nums = nums.map(function(currentValue, index, nums){
            return currentValue * 1; // Type coercing, turning strings into numbers and stripping any whitespace
        });
        return nums; // Returns an array of numbers
    }

    function sum(array) {
        var sum;
        sum = array.reduce(function(previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        });
        return sum;
    }

    function multiply(array) {
        var product;
        product = array.reduce(function(previousValue, currentValue, index, array) {
            return previousValue * currentValue;
        });
        return product;
    }

    function calculate(array) {
        $('.result .sum').text(sum(array));
        $('.result .product').text(multiply(array));
    }

    calculate(getNumbers($('.array-data')));

/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('.new-array').click(function() {
        var currentNumbers = getNumbers($('.array-data'));

        $('.array-data').hide();
        $('.data input').show().val(currentNumbers);
        $('input').focus().select();
    });

    $('.data').on('keydown', 'input', function(event) {
        var key = event.which,
            newArray,
            oldArray = $('.array-data').text();
        if (key === 13) {
            newArray = $(this).val(); // On Enter we are reading input values
            $(this).hide();
            $('.array-data').show().text(newArray);
            calculate(getNumbers($('.array-data')));
        }
        if (key === 27) {
            $(this).hide();
            $('.array-data').show().text(oldArray); // On Esc we are returning previous values into array
        }
    });
});
