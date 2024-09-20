function countLetterAndDigits(input) {
    return input.split('').filter(function (char) { return /[a-zA-Z0-9]/.test(char); }).length;
}
console.log(countLetterAndDigits('hel2!lo')); // 6
