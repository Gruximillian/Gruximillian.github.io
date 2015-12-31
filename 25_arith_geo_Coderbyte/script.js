$(document).ready(function() {

  function getArray(element) {
    element = element.split(',');
    element = element.map(function(current, index, element) {
      return current.trim();
    });
    return element; // Returns trimmed array
  }

  function arithGeo(arr) {
    var arithFactor = arr[1] - arr[0],
        geomFactor = arr[1] / arr[0],
        message = 'Arithmetic',
        len = arr.length,
        i;
    for (i = 0; i < len - 1; i++) {
      if (arithFactor === arr[i + 1] - arr[i] && message === 'Arithmetic') { // First check if it is arithmetic
	      message = 'Arithmetic';
      } else message = 'Geometric'; // If not, assum it is geometric
    }
    for (i = 0; i < len - 1; i++) {
      if (geomFactor === arr[i + 1] / arr[i] && message === 'Geometric') { // Check if it is geometric
	      message = 'Geometric';
      } else if (message !== 'Arithmetic') { // If not, and not arithmetic, then return -1
	      message = -1;
      };
    }
    return message;
  }

  $('.check').click(function() {
    var element = $('.data input').val(),
        message = '';
    if (element === '') {
      message = 'Please enter a string in the field.';
    } else {
      message = 'Array is: <span>' + arithGeo(getArray(element)) + '</span>';
    }
    $('.result p ').html(message);
  });

});
