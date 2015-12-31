$(document).ready(function() {

    function getNumbers(elements) {
        var numbers = {};

        numbers.low = parseInt($(elements).find('.low').text());
        numbers.high = parseInt($(elements).find('.high').text());

        if (numbers.low > numbers.high) { // If user enters lower bound that is greater than the higher bound, switch them
            var temp = numbers.low;
            numbers.low = numbers.high;
            numbers.high = temp;
        }

        return numbers; // Returns number object with number.low and number.high properties
    }

    function generateRandomInteger(nums) {
        $('span.low').text(nums.low);
        $('span.high').text(nums.high);
        if (Math.abs(nums.high - nums.low) === 1 || Math.abs(nums.high - nums.low) === 0) { // There are no integers between two same numbers or between two subsequent integers
            alert('There are no integers between the given values. Try another combination of numbers.');
            $('.random-number').text('not existent');
            return;
        };
        $('.random-number').text(Math.floor(nums.low + 1 + Math.random() * (nums.high - 1 - nums.low)));
    }

    generateRandomInteger(getNumbers('.numbers'));

/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('.enter-low').click(function() {
        var low = $('.numbers .low').text() * 1;

        $('input.high').hide();
        $('.numbers span.high').show();

        $('.numbers span.low').hide();
        $('input.low').val(low).show().focus().select();
    });

    $('.enter-high').click(function() {
        var high = $('.numbers .high').text() * 1;

        $('input.low').hide();
        $('.numbers span.low').show();

        $('.numbers span.high').hide();
        $('input.high').val(high).show().focus().select();
    });

    $('.recalculate').click(function() {
        $('.numbers input').hide();
        $('.numbers span').show();
        generateRandomInteger(getNumbers('.numbers'));
    });

    $('.numbers').on('keydown', 'input', function(event) {
        var newNumber = $(this).val() * 1,
            key = event.which,
            boundary = '.' + $(this).attr('class'), // Class of a number, .low or .high
            parent = $(this).parent(); // .numbers element

        if (key === 27) { // Cancel editing
            $(this).hide(); // Hide input
            parent.find('span' + boundary).show(); // Show span again
        }

        if (key === 13) {
            $(this).hide(); // Hide input
            parent.find('span' + boundary).text(newNumber).show(); // Show span again
        }
    });

});
