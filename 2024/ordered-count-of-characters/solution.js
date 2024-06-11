"use strict";
function orderedCount(str) {
    let countDict = {};
    let order = [];
    for (let char of str) {
        if (!countDict.hasOwnProperty(char)) {
            countDict[char] = 1;
            order.push(char);
        }
        else {
            countDict[char] += 1;
        }
    }
    let result = order.map((char) => [char, countDict[char]]);
    return result;
}
// Ejemplo de uso:
console.log(orderedCount('abracadabra'));
