export function bouncingBalls(
  h: number,
  bounce: number,
  window: number
): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;

  let count = 1;
  let currentHeight = h * bounce;

  while (currentHeight > window) {
    count += 2;
    currentHeight *= bounce;
  }

  return count;
}
