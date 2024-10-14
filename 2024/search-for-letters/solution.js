function searchForLetters(input) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = Array(26).fill('0');
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        var lowerChar = char.toLowerCase();
        if (alphabet.includes(lowerChar)) {
            result[alphabet.indexOf(lowerChar)] = '1';
        }
    }
    return result.join('');
}
console.log(searchForLetters('a   **& cZ'));
