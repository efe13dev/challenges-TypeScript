export function posAverage(s: string): number {
  // Split the string into array of numbers
  const numbers = s.split(', ');
  const { length: n } = numbers;
  const [firstNumber] = numbers;
  let totalCommonPositions = 0;
  let totalComparisons = 0;

  // Compare each pair of numbers
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let commonPositions = 0;
      // Compare each position
      for (let pos = 0; pos < firstNumber.length; pos++) {
        if (numbers[i][pos] === numbers[j][pos]) {
          commonPositions++;
        }
      }
      totalCommonPositions += commonPositions;
      totalComparisons++;
    }
  }

  // Calculate the percentage
  // Total positions compared = totalComparisons * length of each number
  const totalPositions = totalComparisons * firstNumber.length;
  const percentage = (totalCommonPositions / totalPositions) * 100;

  return percentage;
}
