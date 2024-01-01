"use strict";
function past(h, m, s) {
    const minutes = h * 60 + m;
    const seconds = minutes * 60 + s;
    return seconds * 1000;
}
console.log(past(0, 1, 1));
