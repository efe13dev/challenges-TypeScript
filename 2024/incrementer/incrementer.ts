export function incrementer(nums: number[]): number[] {
  return nums.map((num, i) => {
    const sum = num + i + 1;
    return sum % 10;
  });
}
