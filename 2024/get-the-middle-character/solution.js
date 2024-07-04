function getMiddle(s) {
    return s.length % 2 === 0
        ? "".concat(s.charAt(s.length / 2 - 1)).concat(s.charAt(s.length / 2))
        : s.charAt(Math.floor(s.length / 2));
}
console.log(getMiddle('test'));
