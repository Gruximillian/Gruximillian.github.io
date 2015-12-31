$(document).ready(function() {

    function longestWord(sen) {
        var longest = 0,
            longestWord = null,
            sentenceLength;

        sen = sen.split(' ');
        sentenceLength = sen.length

        for (var i = 0; i < sentenceLength; i++) {
            if (sen[i].length > longest && isWord(sen[i])) {
                longest = sen[i].length;
                longestWord = sen[i];
            }
        }
        return longestWord;
    }

    function isWord(word) {
        var wordLength = word.length;
        word = word.split('');
        for (var i = 0; i < wordLength; i++) {
            if (!word[i].match(/[a-z]/i)) return false;
        }
        return true;
    }

    $('.find-longest-word').click(function() {
        var sen = $('.data input').val();
        if (sen === '') {
            $('.result p').html('Please enter a sentence in the field on the left.');
        } else {
            $('.result p').html('The longest word in the sentence is: <span>' + longestWord(sen) + '</span>');
        }
    });

});
