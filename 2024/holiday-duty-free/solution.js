"use strict";
function dutyFree(normPrice, discount, holiday) {
    const savingsPerBottle = normPrice * (discount / 100);
    return Math.floor(holiday / savingsPerBottle);
}
console.log(dutyFree(12, 50, 1000));
