export function arrayLeaders(arr: number[]): number[] {
  return arr.filter(
    (num, index) =>
      num > arr.slice(index + 1).reduce((acc, curr) => acc + curr, 0)
  );
}
