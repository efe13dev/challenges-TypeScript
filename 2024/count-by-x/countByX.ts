export function countByX(x: number, n: number): number[] {
  const result: number[] = [];
  for (let i = 1; i <= n; i++) {
    result.push(i * x);
  }
  return result;
}

console.log(countByX(1, 10));
console.log(countByX(2, 5));
