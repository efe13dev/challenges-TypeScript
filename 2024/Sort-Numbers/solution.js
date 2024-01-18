"use strict";
function solution(nums) {
    if (!nums || nums.length === 0)
        return [];
    return nums.sort((a, b) => a - b);
}
console.log(solution([1, 2, 10, 50, 5]));
