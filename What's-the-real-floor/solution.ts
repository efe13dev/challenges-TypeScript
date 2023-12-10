function getRealFloor(n: number): number {
  if (n <= 0) return n;
  return n > 13 ? n - 2 : n - 1;
}

console.log(getRealFloor(15));
