"use strict";
function tribonacci([a, b, c], n) {
    if (n === 0) {
        return [];
    }
    else if (n <= 3) {
        return [a, b, c].slice(0, n);
    }
    const result = [a, b, c];
    for (let i = 3; i < n; i++) {
        const nextElement = result[i - 1] + result[i - 2] + result[i - 3];
        result.push(nextElement);
    }
    return result;
}
console.log(tribonacci([1, 1, 1], 10));
