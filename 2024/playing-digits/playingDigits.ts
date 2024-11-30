export function digPow(n: number, p: number): number {
  // Convert number to string to process each digit
  const digits: string[] = n.toString().split('');

  // Calculate sum of digits raised to consecutive powers starting from p
  const sum = digits.reduce(
    (acc, digit, index) => acc + Math.pow(parseInt(digit), p + index),
    0
  );

  // Check if sum divided by n gives us a whole number k
  const k = sum / n;

  // Return k if it's a whole number, -1 otherwise
  return Number.isInteger(k) ? k : -1;
}
