export function computeDepth(n: number): number {
  if (n === 0) return 0;
  const digits = new Set<number>();
  let multiple = 0;

  while (digits.size < 10) {
    multiple++;
    const value = n * multiple;
    value
      .toString()
      .split('')
      .forEach((digit) => digits.add(parseInt(digit)));
  }

  return multiple;
}
