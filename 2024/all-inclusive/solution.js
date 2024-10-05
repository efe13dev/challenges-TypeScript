"use strict";
function containAllRots(str, arr) {
    if (str === '')
        return true;
    const rotations = [];
    for (let i = 0; i < str.length; i++) {
        rotations.push(str.slice(i) + str.slice(0, i));
    }
    for (const rotation of rotations) {
        if (!arr.includes(rotation)) {
            return false;
        }
    }
    return true;
}
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']));
