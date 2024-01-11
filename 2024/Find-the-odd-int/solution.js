"use strict";
function findOdd(xs) {
    let frequency = {};
    for (let i = 0; i < xs.length; i++) {
        let num = xs[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
    for (let key in frequency) {
        if (frequency[key] % 2 !== 0) {
            return Number(key);
        }
    }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
