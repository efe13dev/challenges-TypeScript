"use strict";
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    const powAges = [
        age1 ** 2,
        age2 ** 2,
        age3 ** 2,
        age4 ** 2,
        age5 ** 2,
        age6 ** 2,
        age7 ** 2,
        age8 ** 2
    ];
    const sumPowAges = powAges.reduce((acc, item) => acc + item);
    const squareRoot = Math.sqrt(sumPowAges);
    const result = Math.floor(squareRoot / 2);
    return result;
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));
