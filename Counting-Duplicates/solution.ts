function duplicateCount(text: string): number {
  let count = 0;
  const lowerText = text.toLowerCase();
  const seen: { [key: string]: boolean } = {};

  for (let i = 0; i < text.length; i++) {
    const char = lowerText.charAt(i);

    if (seen[char]) {
      continue;
    }

    seen[char] = true;

    if (lowerText.indexOf(char, i + 1) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCount('Indivisibility'));
