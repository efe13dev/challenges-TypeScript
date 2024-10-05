"use strict";
function removeExclamationMarks(str) {
    return str.replace(/!/g, '') + '!';
}
console.log(removeExclamationMarks('Hi!'));
console.log(removeExclamationMarks('Hi!!!'));
console.log(removeExclamationMarks('!Hi'));
console.log(removeExclamationMarks('!Hi!'));
console.log(removeExclamationMarks('Hi! Hi!'));
console.log(removeExclamationMarks('Hi'));
