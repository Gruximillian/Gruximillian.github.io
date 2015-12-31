$(document).ready(function() {

  function palindrome(str) {
    var len = str.length,
        halfLen,
        strNoSpaces = [];

    str = str.split('');

    for (var j = 0; j < len; j++) {
      if (str[j] !== ' ') strNoSpaces.push(str[j].toLowerCase()); // Nevermind the spaces
    }

    len = strNoSpaces.length;
    halfLen = Math.floor(len / 2);

    for (var i = 0; i <= halfLen; i++) {
      if (strNoSpaces[i] !== strNoSpaces[len - 1 - i]) return false;
    }

    return true;
  }

  $('.check').click(function() {
    var string = $('.data input').val(),
      message = '';
    if (string === '') {
      message = 'Please enter a string in the field.';
    } else {
      message = 'The string is palindrome: <span>' + palindrome(string) + '</span>';
    }
    $('.result p ').html(message);
  });

});
