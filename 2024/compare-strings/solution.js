"use strict";
function compare(s1, s2) {
    function isAlphabetic(str) {
        return /^[a-zA-Z]*$/.test(str);
    }
    function asciiSum(str) {
        return str.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    }
    s1 = s1 ? s1.toUpperCase() : '';
    s2 = s2 ? s2.toUpperCase() : '';
    if (!isAlphabetic(s1))
        s1 = '';
    if (!isAlphabetic(s2))
        s2 = '';
    return asciiSum(s1) === asciiSum(s2);
}
console.log(compare('AD', 'BC'));
console.log(compare('AD', 'DD'));
console.log(compare('gf', 'FG'));
console.log(compare('zz1', ''));
console.log(compare('ZzZz', 'ffPFF'));
console.log(compare('kl', 'lz'));
console.log(compare(null, ''));
console.log(compare('', null));
