"use strict";
function between(a, b) {
    const result = [];
    for (let i = a; i <= b; i++) {
        result.push(i);
    }
    return result;
}
console.log(between(-2, 2));
