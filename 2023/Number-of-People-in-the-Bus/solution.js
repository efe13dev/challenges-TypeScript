"use strict";
function number(busStops) {
    const peopleUp = busStops.reduce((a, [up, down]) => a + (up - down), 0);
    return peopleUp;
}
console.log(number([
    [10, 0],
    [3, 5],
    [5, 8]
]));
