"use strict";
function reverseWords(str) {
    const words = str.split(' ');
    const reverse = words.map((word) => word.split('').reverse().join(''));
    return reverse.join(' ');
}
console.log(reverseWords('double  spaced  words'));
