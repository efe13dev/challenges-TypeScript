"use strict";
function positiveSum(arr) {
    const filterPositive = arr.filter((num) => num > 0);
    const result = filterPositive.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return result;
}
const miArray = [1, -4, 7, 12];
console.log(positiveSum(miArray));
