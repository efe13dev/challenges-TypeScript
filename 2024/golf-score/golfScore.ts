export function calculateGolfScore(parList: string, scoreList: string): number {
  // Validate input strings length
  if (parList.length !== 18 || scoreList.length !== 18) {
    throw new Error('Both input strings must be exactly 18 characters long');
  }

  // Convert strings to arrays of numbers and calculate total score
  return [...parList].reduce((totalScore, par, index) => {
    const scoreValue = Number(scoreList[index]);
    const parValue = Number(par);

    // Validate that all characters are numbers between 1 and 9
    if (
      isNaN(scoreValue) ||
      isNaN(parValue) ||
      scoreValue < 1 ||
      scoreValue > 9 ||
      parValue < 1 ||
      parValue > 9
    ) {
      throw new Error('All values must be numbers between 1 and 9');
    }

    // Calculate score difference for current hole and add to total
    return totalScore + (scoreValue - parValue);
  }, 0);
}
