const isPangram = (phrase: string): boolean => {
  const matches = new Set();
  for (const char of phrase) {
    if (char.match(/[a-z]+/gi)) {
      matches.add(char.toLowerCase());
    }
  }
  return matches.size === 26;
};

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
