export function perfectNumbers(n: number): number[] {
  const result: number[] = [];

  // Check numbers from 1 to n
  for (let i = 1; i <= n; i += 2) {
    // We can increment by 2 since even numbers can't be extra perfect
    result.push(i);
  }

  return result;
}
