"use strict";
function isSortedAndHow(array) {
    const isAscending = array.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
    const isDescending = array.every((val, i, arr) => i === 0 || arr[i - 1] >= val);
    if (isAscending) {
        return 'yes, ascending';
    }
    else if (isDescending) {
        return 'yes, descending';
    }
    else {
        return 'no';
    }
}
console.log(isSortedAndHow([15, 7, 3, -8]));
