function lastSurvivor(letters, coords) {
    var lettersArray = letters.split('');
    for (var _i = 0, coords_1 = coords; _i < coords_1.length; _i++) {
        var num = coords_1[_i];
        lettersArray.splice(num, 1);
    }
    return lettersArray.join('');
}
console.log(lastSurvivor('zbk', [0, 1]));
