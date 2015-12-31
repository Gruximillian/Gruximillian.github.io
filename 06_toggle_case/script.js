$(document).ready(function() {

    String.prototype.toggleCase = function() {
        var stringArray = this.valueOf().split(''); // Turn string into array

        stringArray = stringArray.map(function(current, index, stringArray) {
            if (current.toLowerCase() === current) {
                return current.toUpperCase(); // If a character is lowercase, switch to uppercase
            } else {
                return current.toLowerCase(); // Else, switch to lowercase
            }
        });
        return stringArray.join(''); // Join array into string again
    }

    $('.toggle').click(function() {
        var stringText = $('.data input').val(),
            emptyField = stringText.split(' ').join(''); // If this gives an emptty string, then only spaces are entered
        if (emptyField === '') {
            $('.result p').html('Please enter some visible characters.');
        } else {
            $('.result p').html('Toggled string is: <span>' + stringText.toggleCase() + '</span>');
        }
    });

});
