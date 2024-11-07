export function isTidyNumber(num: number): boolean {
  const digits = num.toString().split('');

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    }
  }
  return true;
}
