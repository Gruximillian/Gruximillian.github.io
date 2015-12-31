$(document).ready(function() {

    function getWords() { // Get array of words from a list of elements and returns it
        var wordsSet = $('.array-code li span'),
            wordsArray = [];
        $.each(wordsSet, function(index, value) {
            wordsArray[index] = $(value).text();
        });
        return wordsArray;
    }

    function findTheLongestWord(array) {
        var maxWordLength = 0,
            longestWordIndex = 0;

        array.forEach(function(element, index, array) {
            if (element.length > maxWordLength) {
                maxWordLength = element.length;
                longestWordIndex = index;
            }
        });

        return { // We are returning an object with the longest word, its position in the array and its length
                word: array[longestWordIndex],
                position: longestWordIndex,
                wordLength: array[longestWordIndex].length
                };
    }

    function printTheLongestWord(wordObject) {
        var longestWord = document.querySelector('.longest-word'),
            longestWordIndex = document.querySelector('.longest-word-index'),
            longestWordLength = document.querySelector('.longest-word-length');

        longestWord.innerHTML = wordObject.word;
        longestWordIndex.innerHTML = wordObject.position;
        longestWordLength.innerHTML = wordObject.wordLength;
    }

    printTheLongestWord(findTheLongestWord(getWords()));

/**********************************************************************/
/*****            EVENT HANDLING AND CONVENIENCE CODE             *****/
/**********************************************************************/

    $('ul.array-code').on('click', 'span', function() {
        var parent = $(this).parent(), // li element
            oldWord = $(this).text();

        $('input').hide(); // Hide any already openned input fields
        $('input').parent().find('span').show(); // Show any hidden spans
        $(this).hide(); // Hide span that is currently being edited
        parent.find('input').show().val(oldWord).focus();
        $('button.new-word').attr('disabled', 'disabled');
    });

    $('ul.array-code').on('keydown', 'input', function(event) {
        var key = event.which,
            parent = $(this).parent(), // li element
            newWord,
            nextElement = parent.next(),
            previousElement = parent.prev(),
            previousElementText = previousElement.find('span').text();

        if (key === 27) { // On Esc remove input filed for new word or hide it if editing existing word
            if ($(this).hasClass('new-word')) {
                parent.remove();
            } else {
                $(this).hide();
                parent.find('span').show();
            }
            $('button.new-word').removeAttr('disabled');
        }

        if (key === 13) {
            newWord = $(this).val();
            if (!newWord) { // If there are no characters in the input filed, then delete list item
                parent.remove();
                if (!nextElement.html()) { // If we are removing last item, then remove comma from the previous item
                    previousElement.empty();
                    previousElement.append('\'<span>' + previousElementText + '</span><input type="text">\'');
                    $('button.new-word').removeAttr('disabled');
                }
            } else if ($(this).hasClass('new-word')) { // If enetering new word, then add comma to the previous list item
                previousElement.html(previousElement.html() + ',');
                $('button.new-word').removeAttr('disabled');
            }
            
            $(this).removeClass('new-word').hide(); // After adding new list item, remove class .new-word and hide input filed
            parent.find('span').removeClass('new-word').show().text(newWord); // Remove class .new-word from the span element, show it and populate with entered word
            $('button.new-word').removeAttr('disabled');
            printTheLongestWord(findTheLongestWord(getWords())); // Lastly, determine new longest word
        }
    });

    $('button.new-word').click(function() { // Add new list item with span and input elements
        $('ul.array-code').append('<li>\'<span class="new-word"></span><input class="new-word" placeholder="Enter new word">\'</li>');
        $('input.new-word').show().focus();
        $(this).attr('disabled', 'disabled');
    });

    $('button.clear-words').click(function() {
        $('ul.array-code').empty(); // Clear all words from the array
    });

});
