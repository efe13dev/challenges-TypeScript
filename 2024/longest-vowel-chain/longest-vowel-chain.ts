export function longestVowelChain(str: string): number {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let currentChain = 0;
  let maxChain = 0;

  for (const char of str) {
    if (vowels.has(char)) {
      currentChain++;
      maxChain = Math.max(maxChain, currentChain);
    } else {
      currentChain = 0;
    }
  }

  return maxChain;
}
