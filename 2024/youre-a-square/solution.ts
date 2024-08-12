function isSquare(n: number): boolean {
  if (n < 0) return false;

  const sqrt = Math.sqrt(n);

  return sqrt === Math.floor(sqrt);
}

console.log(isSquare(26));
