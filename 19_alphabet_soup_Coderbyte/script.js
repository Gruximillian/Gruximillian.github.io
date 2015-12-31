$(document).ready(function() {

    String.prototype.removeCharAtIndex = function(index) { // Removes character at given index from a string
        var subString1 = '',
            subString2 = '';

        subString1 = this.substring(0, index); // Substring to the left of the removed character
        subString2 = this.substring(index + 1); // Substring to the right of the removed character
        return subString1 + subString2;
    }

    function alphabetSoup(str) {
        var newStr = '',
            tempChar, // Character that is alphabetically first in a given string
            tempIndex, // Index of a previous character
            len = str.length;

        while (len > 0) { // Until string is emptied search for the alphabetically smallest character
            tempChar = str.charAt(0); // Assume that first character in a string is alphabetically smallest
            for (var i = 0; i < len; i++) { // Go throught the characters in a string
                if (str.charAt(i) <= tempChar) { // If another character is alphabetically before tempChar
                    tempChar = str.charAt(i); // Assign that character to the tempChar,
                    tempIndex = i; // and save the index of that character
                }
            }
            str = str.removeCharAtIndex(tempIndex); // Remove alphabetically first character from a string by its index
            newStr += tempChar; // Add removed character to the new string
            len--; // Reduce len because str.length is reduced by 1 and go throught the reduced string again
        }
        return newStr;
    }

    function alphabetSoupRecursive(str) {
        var len = str.length,
            tempChar, // Character that is alphabetically first in a given string
            tempIndex; // Index of a previous character

        if (len === 1) {
            return str; // If there is only one character left in the starting string, then add it to the resulting string
        } else {
            tempChar = str.charAt(0); // Assume that first character in a string is alphabetically smallest
            for (var i = 0; i < len; i++) { // Go throught the characters in a string
                if (str.charAt(i) <= tempChar) { // If another character is alphabetically before tempChar
                    tempChar = str.charAt(i); // Assign that character to the tempChar,
                    tempIndex = i; // and save the index of that character
                }
            }
            str = str.removeCharAtIndex(tempIndex); // Remove alphabetically first character from a string by its index
            //str = str.substring(0, tempIndex) + str.substring(tempIndex + 1); // Same as the above, but without using .removeCharAtIndex() method
            return tempChar + alphabetSoupRecursive(str); // Return alphabetically smallest character and go throught the reduced string again
        }
    }

    $('.sort').click(function() {
        var string = $('.data input').val(),
            message = '';
        if (string === '') {
            message = 'Please enter a string in the field.';
        } else {
            message = 'Alphabetized string is: <span>' + alphabetSoupRecursive(string) + '</span>';
        }
        $('.result p ').html(message);
    });

});
