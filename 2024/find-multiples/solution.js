"use strict";
function findMultiples(integer, limit) {
    let multiples = [];
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i);
    }
    return multiples;
}
console.log(findMultiples(5, 25));
