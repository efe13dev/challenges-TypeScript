"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleOfIndex = multipleOfIndex;
function multipleOfIndex(array) {
    // Filtra los elementos que son múltiplos de su propio índice
    var result = array.filter(function (value, index) { return (index !== 0 && value % index === 0) || value === 0; });
    return result;
}
console.log(multipleOfIndex([0, 2, 3, 6, 9]));
