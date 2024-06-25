"use strict";
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    const yourTime = pontoonDistance / youSpeed;
    const effectiveSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    const sharkTime = sharkDistance / effectiveSharkSpeed;
    return yourTime < sharkTime ? 'Alive!' : 'Shark Bait!';
}
console.log(shark(12, 50, 4, 8, true));
