function sumArray(array) {
    if (!array || array.length <= 1)
        return 0;
    array.sort(function (a, b) { return a - b; });
    array.pop();
    array.shift();
    var sum = array.reduce(function (acc, num) { return acc + num; }, 0);
    return sum;
}
console.log(sumArray([6, 2, 1, 8, 10]));
