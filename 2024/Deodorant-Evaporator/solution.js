"use strict";
function evaporator(content, evapPerDay, threshold) {
    let days = 0;
    let remainingPercentage = 100;
    while (remainingPercentage > threshold) {
        remainingPercentage *= 1 - evapPerDay / 100;
        days++;
    }
    return days;
}
console.log(evaporator(10, 10, 5));
