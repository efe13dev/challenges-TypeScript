"use strict";
function lastPetalPhrase(petals) {
    const phrases = [
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
        'not at all'
    ];
    const index = (petals - 1) % phrases.length;
    return phrases[index];
}
console.log(lastPetalPhrase(5));
