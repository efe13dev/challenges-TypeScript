function inPowerOfTwo(n: number): boolean {
  return Number.isInteger(Math.log2(n));
}

console.log(inPowerOfTwo(1024));
