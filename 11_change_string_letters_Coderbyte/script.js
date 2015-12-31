$(document).ready(function() {

    function getString(element) {
        return $(element).val();
    }

    function letterChanges(str) { 
	    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
            strLen,
            alphaLen,
            vowels = ['a','e','i','o','u'],
            newString;
      if (str === '') return 'Enter a string, please!';
      newString = str.toString().split('');
      strLen = newString.length;
      alphaLen = alphabet.length;
      for (var i = 0; i < strLen; i++) {
      	for (var j = 0; j < alphaLen; j++) {
        	if (newString[i].toLowerCase() === alphabet[j]) {
              	if (newString[i].toLowerCase() === 'z') {
                	newString[i] = 'A';
                	break;
                } else {
            		newString[i] = alphabet[j+1];
                  	if (vowels.indexOf(newString[i]) !== -1) {
                    	newString[i] = newString[i].toUpperCase();
                    }
                    break;
                }
            }
        }
      }
      return newString.join('');
    }

    $('.change-string').click(function() {
        $('.result p ').html('Changed string is: <span>' + letterChanges(getString('.data input')) + '</span>');
    });

});
