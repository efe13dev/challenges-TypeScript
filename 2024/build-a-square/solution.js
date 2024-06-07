"use strict";
function generateShape(n) {
    let shape = '';
    for (let i = 0; i < n; i++) {
        shape += '+'.repeat(n);
        if (i < n - 1) {
            shape += '\n';
        }
    }
    return shape;
}
console.log(generateShape(3));
