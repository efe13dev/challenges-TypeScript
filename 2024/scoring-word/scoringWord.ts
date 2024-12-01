export const high = (str: string): string => {
  // Function to calculate word score
  const getWordScore = (word: string): number =>
    word.split('').reduce((score, char) => score + char.charCodeAt(0) - 96, 0);
  // Split string into words and find the highest scoring one
  return str.split(' ').reduce((highest, current) => {
    const highestScore = getWordScore(highest);
    const currentScore = getWordScore(current);

    return currentScore > highestScore ? current : highest;
  });
};
