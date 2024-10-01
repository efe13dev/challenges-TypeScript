"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balancedNum = balancedNum;
function balancedNum(number) {
    var digits = String(number).split('').map(Number);
    var length = digits.length;
    var midIndex = Math.floor(length / 2);
    var leftSum = 0;
    var rightSum = 0;
    for (var i = 0; i < midIndex - (length % 2 === 0 ? 1 : 0); i++) {
        leftSum += digits[i];
        rightSum += digits[length - 1 - i];
    }
    return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}
console.log(balancedNum(7));
console.log(balancedNum(295591));
console.log(balancedNum(959));
console.log(balancedNum(27102983));
