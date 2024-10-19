function rot(s) {
    return s
        .split('\n')
        .map(function (line) { return line.split('').reverse().join(''); })
        .reverse()
        .join('\n');
}
function selfieAndRot(s) {
    var lines = s.split('\n');
    var dots = '.'.repeat(lines[0].length);
    var selfie = lines.map(function (line) { return line + dots; }).join('\n');
    var rotated = rot(s)
        .split('\n')
        .map(function (line) { return dots + line; })
        .join('\n');
    return selfie + '\n' + rotated;
}
function oper(fct, s) {
    return fct(s);
}
// Ejemplos de uso:
console.log(oper(rot, 'abcd\nefgh\nijkl\nmnop'));
console.log(oper(selfieAndRot, 'abcd\nefgh\nijkl\nmnop'));
