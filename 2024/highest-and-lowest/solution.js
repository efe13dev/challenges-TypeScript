"use strict";
function highestAndLowest(nums) {
    const arrayNums = nums.split(' ').map(Number);
    const min = Math.min(...arrayNums);
    const max = Math.max(...arrayNums);
    return `${max} ${min}`;
}
console.log(highestAndLowest('1 2 3 4 5'));
