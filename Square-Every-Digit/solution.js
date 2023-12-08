"use strict";
function squareDigit(num) {
    const arrayDigit = num.toString().split('');
    const squareNumbers = arrayDigit.map((item) => Math.pow(Number(item), 2));
    return Number(squareNumbers.join(''));
}
console.log(squareDigit(9119));
