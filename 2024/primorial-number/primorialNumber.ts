export function numPrimorial(n: number): number {
  // Helper function to check if a number is prime
  function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let result = 1;
  let count = 0;
  let currentNumber = 2;

  // Find and multiply the first n prime numbers
  while (count < n) {
    if (isPrime(currentNumber)) {
      result *= currentNumber;
      count++;
    }
    currentNumber++;
  }

  return result;
}
