$(document).ready(function() {

    var combinations = [],
        passes = 0;
/*
    function getArray(element) {
        element = element.split(',');
        element = element.map(function(current, index, element) {
            return current.trim() * 1;
        });
        return element;
    }

    function arrayAdditionI(arr) {
        var max = 0,
            idxOfMax = 0,
            sum = 0,
            sum1 = 0,
            //len = arr.length,
            newArr = [],
            i,
            j;

        for (i = 0; i < len; i++) {
            if (arr[i] > max) {
                max = arr[i];
                idxOfMax = i;
            }
        }

        for (i = 0; i < len; i++) {
            if (i !== idxOfMax) newArr.push(arr[i]);
        }

        len = newArr.length;

    }
*/

/*
    OVO RADI, ALI IMA PREVISE PROLAZAKA KROZ PETLJU STO MOZE BITI PROBLEM KOD
    NIZOVA SA VELIKIM BROJEM CLANOVA


    function removeFromArray(index, array) {
        var newArray = [],
            len = array.length,
            removed;
        for (var i = 0; i < len; i++) {
            newArray[i] = array[i];
        }
        removed = newArray.splice(index, 1);
        return newArray;
    }

    function arrRec(arr) {
        var sum = arr[0],
            ln = arr.length,
            diff = ln - 2,
            tempSum = 0;
        if (ln === 0) return;
        passes++;
        if (combinations.indexOf(sum) === -1) {
            combinations.push(sum);
        }
        for (var i = 1; i < ln; i++) {
            tempSum = arr[0] + arr[i];
            passes++;
            if (combinations.indexOf(tempSum) === -1) {
                combinations.push(tempSum);
            }
            sum = sum + arr[i];
            if (sum !== arr[0] + arr[i]) {
                passes++;
                if (combinations.indexOf(sum) === -1) {
                    combinations.push(sum);
                }
            }
        }
        if (diff > 1) {
            for (var j = 1; j < diff + 1; j++) {
                arrRec(removeFromArray(j, arr));
            }
        }
    }

    var arr = ['a', 'b', 'c', 'd', 'e'],
        len = arr.length;

    for (var i = 0; i < len; i++) {
        arrRec(arr);
        arr = removeFromArray(0, arr);
    }
*/

    function removeFromArray(index, array) {
        var newArray = [],
            len = array.length,
            removed;
        for (var i = 0; i < len; i++) {
            newArray[i] = array[i];
        }
        removed = newArray.splice(index, 1);
        return newArray;
    }

    var arr = ['a', 'b', 'c', 'd', 'e'],
        len = arr.length;
    arrRec(arr);

    function arrRec(arr) {
        var sum = arr[0],
            ln = arr.length,
            diff = ln - 2,
            tempSum = 0,
            subArray = [];
        if (ln === 0) return;
        passes++;
        combinations.push(sum);
        for (var i = 1; i < ln; i++) {
            sum += arr[i];
            combinations.push(sum);
            passes++;
        }
        sum = arr[0];
        if (diff > 1) {
            for (var j = 1; j < ln - 1; j++) {
                subArray = removeFromArray(j, arr);

                
                console.log('arr = ' + j + ': ' + arr);
                console.log('subArray = ' + j + ': ' + subArray);
            }
        }
        console.log('End: ' + arr);

/*        if (combinations.indexOf(sum) === -1) {
            combinations.push(sum);
        }
        for (var i = 1; i < ln; i++) {
            tempSum = arr[0] + arr[i];
            passes++;
            if (combinations.indexOf(tempSum) === -1) {
                combinations.push(tempSum);
            }
            sum = sum + arr[i];
            if (sum !== arr[0] + arr[i]) {
                passes++;
                if (combinations.indexOf(sum) === -1) {
                    combinations.push(sum);
                }
            }
        }
        if (diff > 1) {
            for (var j = 1; j < diff + 1; j++) {
                arrRec(removeFromArray(j, arr));
            }
        }
    */
    }

    console.log(JSON.stringify(combinations, null, 4));
    console.log(combinations.length);
    console.log('passes: ' + passes);
});
