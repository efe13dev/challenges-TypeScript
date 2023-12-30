"use strict";
function capitalize(s) {
    let cap1 = '';
    let cap2 = '';
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            cap1 += s[i].toUpperCase();
            cap2 += s[i];
        }
        else {
            cap1 += s[i];
            cap2 += s[i].toUpperCase();
        }
    }
    return [cap1, cap2];
}
console.log(capitalize('abcdef'));
