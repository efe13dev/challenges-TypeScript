function arrayDiff(a, b) {
    return a.filter(function (item) { return !b.includes(item); });
}
console.log(arrayDiff([1, 2], [1]));
