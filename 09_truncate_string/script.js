$(document).ready(function() {

    function truncateString(text, length) {
        return text.slice(0, length);
    }

    $('.truncate').click(function() {
        var text = $('.data input.string').val(),
            length = $('.data input.number').val();

        $('.result p').html('Truncated string is: "<span>' + truncateString(text, length) + '</span>".');
    });

});
