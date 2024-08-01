"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbYear = void 0;
var nbYear = function (p0, percent, aug, p) {
    var currentPopulation = p0;
    var years = 0;
    var growthRate = percent / 100;
    while (currentPopulation < p) {
        currentPopulation += Math.floor(currentPopulation * growthRate) + aug;
        years++;
    }
    return years;
};
exports.nbYear = nbYear;
console.log((0, exports.nbYear)(1500, 5, 100, 5000));
