"use strict";
function nthSmaller(arr, pos) {
    if (arr.length < 3)
        console.log('the array must have at least 3 elements');
    const arrSorted = arr.sort((a, b) => a - b);
    return arrSorted[pos - 1];
}
console.log(nthSmaller([15, 20, 7, 10, 4, 3], 3));
