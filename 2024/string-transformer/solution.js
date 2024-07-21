function stringTransformer(str) {
    var changedCaseStr = str
        .split('')
        .map(function (char) {
        if (char === char.toUpperCase()) {
            return char.toLowerCase();
        }
        else {
            return char.toUpperCase();
        }
    })
        .join('');
    var reversedWordString = changedCaseStr.split(' ').reverse().join(' ');
    return reversedWordString;
}
console.log(stringTransformer('Example Input'));
