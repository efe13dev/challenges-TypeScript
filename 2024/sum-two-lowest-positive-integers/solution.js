function sumTwoSmallestNumbers(nums) {
    var sortedNums = nums.sort(function (a, b) { return a - b; });
    return sortedNums[0] + sortedNums[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
