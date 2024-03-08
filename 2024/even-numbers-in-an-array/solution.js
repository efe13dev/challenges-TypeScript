"use strict";
const evenNumbers = (arr, n) => {
    const evenNumbers = arr.filter((number) => number % 2 === 0);
    return evenNumbers.slice(-n);
};
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
