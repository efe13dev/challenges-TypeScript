"use strict";
function multiplyArrayValues(array) {
    const result = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return result;
}
const inputArray = [1, 2, 3, 4];
const result = multiplyArrayValues(inputArray);
console.log(result);
