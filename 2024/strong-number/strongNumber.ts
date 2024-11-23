export function strongNumber(num: number): string {
  // Helper function to calculate factorial
  const factorial = (n: number): number => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  // Convert number to string to process each digit
  const digits = num.toString().split('').map(Number);
  
  // Calculate sum of factorials
  const sum = digits.reduce((acc, digit) => acc + factorial(digit), 0);
  
  // Compare sum with original number
  return sum === num ? "STRONG!!!!" : "Not Strong !!";
}
