"use strict";
function binaryArrayToNumber(arr) {
    const binaryString = arr.join('');
    const decimalValue = parseInt(binaryString, 2);
    return decimalValue;
}
console.log(binaryArrayToNumber([1, 0, 1, 1]));
