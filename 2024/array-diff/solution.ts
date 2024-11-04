function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((item) => !b.includes(item));
}
console.log(arrayDiff([1, 2], [1]));
