function spinWords(words: string): string {
  const arrayWord: string[] = words.split(' ');
  const result = arrayWord
    .map((word: string) =>
      word.length >= 5 ? word.split('').reverse().join('') : word
    )
    .join(' ');
  return result;
}

console.log(spinWords('Hey fellow warriors'));
