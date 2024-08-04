function solve(arr) {
    var result = [];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var normalizedArr = arr.map(function (el) { return el.toLowerCase().split(''); });
    for (var _i = 0, normalizedArr_1 = normalizedArr; _i < normalizedArr_1.length; _i++) {
        var word = normalizedArr_1[_i];
        var matchCount = 0;
        for (var j = 0; j < word.length; j++) {
            if (alphabet[j] === word[j]) {
                matchCount += 1;
            }
        }
        result.push(matchCount);
    }
    return result;
}
console.log(solve(['abode', 'ABc', 'xyzD']));
