function findEvenIndex(arr) {
    var totalSum = arr.reduce(function (acc, val) { return acc + val; }, 0);
    var leftSum = 0;
    for (var i = 0; i < arr.length; i++) {
        var rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum)
            return i;
        leftSum += arr[i];
    }
    return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
