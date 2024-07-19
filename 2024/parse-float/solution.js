"use strict";
function parseFloat(s) {
    const result = Number.parseFloat(s);
    return isNaN(result) ? null : result;
}
console.log(parseFloat('2.5'));
