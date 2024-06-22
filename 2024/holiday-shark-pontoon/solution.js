function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    var timeToPontoon = pontoonDistance / youSpeed;
    var effectiveSharkSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    var timeToPontoonShark = sharkDistance / effectiveSharkSpeed;
    return timeToPontoon < timeToPontoonShark ? 'Alive!' : 'Shark Bait!';
}
console.log(shark(12, 50, 4, 8, true));
