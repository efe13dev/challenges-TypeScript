function sumArray(array: number[]): number {
  if (!array || array.length <= 1) return 0;
  array.sort((a, b) => a - b);
  array.pop();
  array.shift();
  const sum = array.reduce((acc, num) => acc + num, 0);

  return sum;
}

console.log(sumArray([1, 1, 11, 2, 3]));
