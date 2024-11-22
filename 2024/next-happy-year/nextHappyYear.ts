export function nextHappyYear(year: number): number {
  let currentYear = year + 1;

  while (true) {
    // Convert year to string and check if all digits are unique
    const digits = currentYear.toString().split('');
    const uniqueDigits = new Set(digits);

    // If number of unique digits equals total digits, all are distinct
    if (uniqueDigits.size === digits.length) {
      return currentYear;
    }

    currentYear++;
  }
}
