$(document).ready(function() {

    function firstReverse(str) { 
	    var len,
            temp;
        str = str.toString().split('');
        len = str.length;
        for (var i = 0; i < len / 2; i++) {
            temp = str[i];
            str[i] = str[len - 1 - i];
            str[len - 1 - i] = temp;
        }
        return str.join(''); 
    }

    function getString(element) {
        return $(element).val();
    }

/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('.reverse').click(function() {
        $('.result p').html('Reversed string is: <span>' + firstReverse(getString('.data input')) + '</span>');
    });

});
