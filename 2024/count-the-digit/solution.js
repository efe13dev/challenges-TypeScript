"use strict";
function countDigit(n, d) {
    let count = 0;
    for (let i = 0; i <= n; i++) {
        const square = i * i;
        const squareStr = square.toString();
        for (let char of squareStr) {
            if (parseInt(char) === d) {
                count++;
            }
        }
    }
    return count;
}
console.log(countDigit(12224, 8));
