"use strict";
function pipeFix(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const fixedPipes = [];
    for (let i = min; i <= max; i++) {
        fixedPipes.push(i);
    }
    return fixedPipes;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
