function alphabetPosition(letter: string): string {
  letter = letter.toLowerCase();

  const position = letter.charCodeAt(0) - 96;

  if (position >= 1 && position <= 26) {
    return 'Position of alphabet: ' + position;
  } else {
    return 'Invalid input. Please provide a single letter.';
  }
}

console.log(alphabetPosition('a'));
