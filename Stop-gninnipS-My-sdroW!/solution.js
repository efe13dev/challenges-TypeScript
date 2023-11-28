"use strict";
function spinWords(words) {
    const arrayWord = words.split(' ');
    const result = arrayWord
        .map((word) => word.length >= 5 ? word.split('').reverse().join('') : word)
        .join(' ');
    return result;
}
console.log(spinWords('Hey fellow warriors'));
