"use strict";
function solve(arr) {
    const result = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const normalizedArr = arr.map((el) => el.toLowerCase().split(''));
    for (const word of normalizedArr) {
        let matchCount = 0;
        for (let j = 0; j < word.length; j++) {
            if (alphabet[j] === word[j]) {
                matchCount += 1;
            }
        }
        result.push(matchCount);
    }
    return result;
}
console.log(solve(['abode', 'ABc', 'xyzD']));
