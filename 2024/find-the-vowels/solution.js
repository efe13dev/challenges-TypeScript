"use strict";
function vowelIndices(word) {
    const vowels = 'aeiouy';
    const result = [];
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            result.push(i + 1);
        }
    }
    return result;
}
console.log(vowelIndices('apple'));
