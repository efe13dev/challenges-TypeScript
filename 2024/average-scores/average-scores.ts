export function average(scores: number[]): number {
  const sum = scores.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return Math.round(sum / scores.length);
}
