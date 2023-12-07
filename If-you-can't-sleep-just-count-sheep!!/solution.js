"use strict";
function countSheep(num) {
    let count = '';
    for (let i = 1; i < num + 1; i++) {
        count += `${i} sheep...`;
    }
    return count;
}
console.log(countSheep(5));
