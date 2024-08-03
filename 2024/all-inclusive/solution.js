function containAllRots(str, arr) {
    if (str === '')
        return true;
    var rotations = [];
    for (var i = 0; i < str.length; i++) {
        rotations.push(str.slice(i) + str.slice(0, i));
    }
    for (var _i = 0, rotations_1 = rotations; _i < rotations_1.length; _i++) {
        var rotation = rotations_1[_i];
        if (!arr.includes(rotation)) {
            return false;
        }
    }
    return true;
}
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']));
