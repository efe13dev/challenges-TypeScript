export function fearNumber(day: string, num: number): boolean {
  // Convert day to lowercase for case-insensitive comparison
  const dayLower = day.toLowerCase();

  switch (dayLower) {
    case 'monday':
      return num === 12;
    case 'tuesday':
      return num > 95;
    case 'wednesday':
      return num === 34;
    case 'thursday':
      return num === 0;
    case 'friday':
      return num % 2 === 0; // divisible by 2 means even numbers
    case 'saturday':
      return num === 56;
    case 'sunday':
      return num === 666 || num === -666;
    default:
      throw new Error('Invalid day of the week');
  }
}
