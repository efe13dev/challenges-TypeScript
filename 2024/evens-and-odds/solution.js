"use strict";
const evensAndOdds = (n) => {
    return n % 2 === 0 ? n.toString(2) : n.toString(16);
};
console.log(evensAndOdds(0));
console.log(evensAndOdds(1));
console.log(evensAndOdds(2));
console.log(evensAndOdds(3));
console.log(evensAndOdds(4));
