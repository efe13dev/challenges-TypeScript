function thirt(n) {
    var pattern = [1, 10, 9, 12, 3, 4];
    var prevSum = 0;
    var sum = n;
    while (sum !== prevSum) {
        prevSum = sum;
        sum = String(sum)
            .split('')
            .reverse()
            .reduce(function (acc, digit, index) {
            return acc + Number(digit) * pattern[index % pattern.length];
        }, 0);
    }
    return sum;
}
console.log(thirt(8529));
console.log(thirt(85299258));
