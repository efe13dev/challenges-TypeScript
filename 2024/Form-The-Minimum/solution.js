"use strict";
function minValue(values) {
    const uniqueDigits = Array.from(new Set(values)).sort((a, b) => a - b);
    const result = parseInt(uniqueDigits.join(''));
    return result;
}
console.log(minValue([1, 9, 3, 1, 7, 4, 6, 6, 7]));
