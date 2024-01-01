"use strict";
function expressionsMatter(a, b, c) {
    return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c);
}
console.log(expressionsMatter(1, 2, 3));
