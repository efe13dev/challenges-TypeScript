"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = order;
function order(words) {
    if (words === '') {
        return '';
    }
    var wordArray = words.split(' ');
    wordArray.sort(function (a, b) {
        var matchA = a.match(/\d/);
        var matchB = b.match(/\d/);
        if (matchA === null || matchB === null) {
            return 0;
        }
        var numA = parseInt(matchA[0], 10);
        var numB = parseInt(matchB[0], 10);
        return numA - numB;
    });
    return wordArray.join(' ');
}
console.log(order('is2 Thi1s T4est 3a'));
