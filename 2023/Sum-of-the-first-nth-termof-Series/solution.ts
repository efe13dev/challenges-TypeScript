function SeriesSum(n: number): string {
  if (n === 0) {
    return '0.00';
  }
  let totalSum = 0.0;
  let denominator = 1;
  for (let i = 0; i < n; i++) {
    totalSum += 1 / denominator;
    denominator += 3;
  }
  return totalSum.toFixed(2);
}

console.log(SeriesSum(5));
