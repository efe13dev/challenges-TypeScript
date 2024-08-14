function maxTriSum(nums) {
    var uniqueNums = Array.from(new Set(nums));
    uniqueNums.sort(function (a, b) { return b - a; });
    var maxSum = uniqueNums[0] + uniqueNums[1] + uniqueNums[2];
    return maxSum;
}
console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
