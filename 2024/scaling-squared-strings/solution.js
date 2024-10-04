function scale(s, k, n) {
    if (s === '')
        return '';
    var lines = s.split('\n');
    var scaledLines = lines.map(function (line) {
        var scaledLine = line
            .split('')
            .map(function (char) { return char.repeat(k); })
            .join('');
        return Array(n).fill(scaledLine).join('\n');
    });
    return scaledLines.join('\n');
}
console.log(scale('abcd\nefgh\nijkl\nmnop', 2, 3));
