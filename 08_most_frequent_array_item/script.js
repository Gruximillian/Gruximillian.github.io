$(document).ready(function() {

    function getArray(input) {
        var array = $(input).val().split(','); // Split string on comma

        array = array.map(function(current, index, array) {
            if (current.trim() === '') {
                return current; // If item is only whitespace, then return untrimmed
            } else {
                return current.trim(); // Else, trim whitespaces
            }
        });

        return array;
    }

    function countItemFrequency(array) {
        var occurences = {},
            i;

        for (i = 0; i < array.length; i++) {

            if (!occurences.hasOwnProperty(array[i])) {
                occurences[array[i]] = 1; // If occurences object does not have this array item as own property, add it and set its count to 1
            } else {
                occurences[array[i]]++; // If occurences object has this array item as own property, increase its count by 1
            }
        }

        return occurences; // Returns an object with array items and their number of occurences as properties
    }

    function getMostFrequentItem(object) {
        var mostFrequentItem = null,
            frequency = 0,
            item;

        for (item in object) {
            if (object[item] > frequency) {
                frequency = object[item];
                mostFrequentItem = item;
            }
        }

        return ('Most frequent item in the array is "' + mostFrequentItem + '", occuring ' + frequency + ' times.');
    }

    $('.count-items').click(function() {
        if (!$('.data input').val()) {
            $('.result p').html('Please enter an array in the field.');
            return;
        } else {
            console.log(JSON.stringify( countItemFrequency( getArray('.data input') ), null, 4) );
            $('.result p').html( getMostFrequentItem( countItemFrequency( getArray('.data input') ) ) );
        }
    });

});
