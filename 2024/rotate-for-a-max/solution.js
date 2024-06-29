"use strict";
function maxRot(n) {
    let str = n.toString();
    let maxNum = n;
    for (let i = 0; i < str.length - 1; i++) {
        str = str.slice(0, i) + str.slice(i + 1) + str[i];
        const rotatedNum = parseInt(str, 10);
        if (rotatedNum > maxNum) {
            maxNum = rotatedNum;
        }
    }
    return maxNum;
}
console.log(maxRot(56789));
