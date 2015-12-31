$(document).ready(function () {

    function celsiusToFahrenheit(c) {
        return c * 9 / 5 + 32;
    }

    function fahrenheitToCelsius(f) {
        return (f - 32) * 5 / 9;
    }

    $('.data').on('keyup', 'input', function (event) {
        var key = event.which,
            temperature = $(this).val().split(' ').join(''); // Don't allow spaces to be entered

        if (key === 27 || isNaN(temperature) || temperature === '') {
            if (temperature === '') { // If field is empty, reset both fields
                $('.celsius').val('');
                $('.fahrenheit').val('');
            }
            return; // On Esc and on entering non number, do nothing
        }

        temperature = temperature * 1; // Convert temperature string to number

        if ($(this).hasClass('celsius') && parseFloat(temperature) === temperature) {
            $('.fahrenheit').val(celsiusToFahrenheit(temperature));
        } else if ($(this).hasClass('fahrenheit')) {
            $('.celsius').val(fahrenheitToCelsius(temperature));
        }
    });

});
