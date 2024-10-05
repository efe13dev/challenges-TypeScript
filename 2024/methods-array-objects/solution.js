function bigToSmall(arr) {
    return arr
        .flat()
        .sort(function (a, b) { return b - a; })
        .join('>');
}
console.log(bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6]
]));
