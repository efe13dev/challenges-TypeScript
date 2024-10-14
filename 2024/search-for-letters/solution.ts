function searchForLetters(input: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const result = Array(26).fill('0');

  for (const char of input) {
    const lowerChar = char.toLowerCase();
    if (alphabet.includes(lowerChar)) {
      result[alphabet.indexOf(lowerChar)] = '1';
    }
  }

  return result.join('');
}

console.log(searchForLetters('a   **& cZ'));
