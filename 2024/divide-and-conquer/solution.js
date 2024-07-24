function divCon(x) {
    var numbers = [];
    var strings = [];
    x.forEach(function (item) {
        if (typeof item === 'number') {
            numbers.push(item);
        }
        if (typeof item === 'string') {
            strings.push(Number(item));
        }
    });
    var sumNumbers = numbers.reduce(function (acc, item) { return acc + item; }, 0);
    var sumStrings = strings.reduce(function (acc, item) { return acc + item; }, 0);
    return sumNumbers - sumStrings;
}
console.log(divCon([9, 3, '7', '3']));
