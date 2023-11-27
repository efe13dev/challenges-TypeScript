function positiveSum(arr: number[]): number {
  const filterPositive: number[] = arr.filter((num) => num > 0);
  const result: number = filterPositive.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return result;
}
const miArray: number[] = [1, -4, 7, 12];

console.log(positiveSum(miArray));
