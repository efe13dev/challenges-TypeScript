"use strict";
function circleArea(radius) {
    if (radius <= 0) {
        throw new Error('Radius must be positive');
    }
    return Math.PI * radius * radius;
}
console.log(circleArea(1));
