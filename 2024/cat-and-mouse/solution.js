"use strict";
function catAndMouse(x) {
    const distance = Math.abs(x.indexOf('m') - x.indexOf('C'));
    if (distance <= 4) {
        return 'Caught!';
    }
    else {
        return 'Escaped!';
    }
}
console.log(catAndMouse('C..m'));
console.log(catAndMouse('C.....m'));
