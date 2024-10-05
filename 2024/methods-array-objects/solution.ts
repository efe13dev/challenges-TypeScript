function bigToSmall(arr: number[][]): string {
  return arr
    .flat()
    .sort((a, b) => b - a)
    .join('>');
}

console.log(
  bigToSmall([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
);
