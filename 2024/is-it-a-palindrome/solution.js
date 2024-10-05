"use strict";
function ispalindrome(x) {
    const reverseX = x.split('').reverse().join('');
    return x.toLowerCase() === reverseX.toLowerCase();
}
console.log(ispalindrome('Abba'));
