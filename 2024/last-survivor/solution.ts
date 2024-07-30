function lastSurvivor(letters: string, coords: number[]): string {
  let lettersArray = letters.split('');
  for (const num of coords) {
    lettersArray.splice(num, 1);
  }
  return lettersArray.join('');
}

console.log(lastSurvivor('zbk', [0, 1]));
