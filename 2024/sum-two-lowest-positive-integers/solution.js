"use strict";
function sumTwoSmallestNumbers(nums) {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[0] + sortedNums[1];
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
