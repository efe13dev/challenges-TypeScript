function divisors(n: number): number {
  let divisorCount = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) divisorCount++;
  }
  return divisorCount;
}

console.log(divisors(30));
