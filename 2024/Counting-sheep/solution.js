"use strict";
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((sheep) => sheep === true).length;
}
console.log(countSheeps([true, true, true, false, true]));
