function maxTriSum(nums: number[]): number {
  const uniqueNums = Array.from(new Set(nums));
  uniqueNums.sort((a, b) => b - a);
  const maxSum = uniqueNums[0] + uniqueNums[1] + uniqueNums[2];
  return maxSum;
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
