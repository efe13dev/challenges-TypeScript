function minSum(arr) {
    arr.sort(function (a, b) { return a - b; });
    var sum = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - i - 1];
    }
    return sum;
}
console.log(minSum([5, 4, 2, 3]));