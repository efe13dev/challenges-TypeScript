"use strict";
function explode(s) {
    return s
        .split('')
        .map((char) => char.repeat(Number(char)))
        .join('');
}
console.log(explode('312'));
