"use strict";
function inPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n));
}
console.log(inPowerOfTwo(1024));
