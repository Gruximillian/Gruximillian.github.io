$(document).ready(function() {

  function ExOh(str) {
    var xNum = 0,
      oNum = 0,
      len = str.length;
    str = str.split('');
    for (var i = 0; i < len; i++) {
      if (str[i] === 'x') {
        xNum++;
      } else if (str[i] === 'o') {
        oNum++;
      } else return 'Bad string!';
    }
    if (xNum === oNum) return true;
    return false;
  }

  $('.test').click(function() {
    var string = $('.data input').val(),
      message = '';
    if (string === '') {
      message = 'Please enter a string of x\'s and o\'s in the field.';
    } else {
      message = 'Number of x\'s and o\'s is equal: <span>' + ExOh(string) + '</span>';
    }
    $('.result p ').html(message);
  });

});
