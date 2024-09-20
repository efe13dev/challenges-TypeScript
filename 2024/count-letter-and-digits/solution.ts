function countLetterAndDigits(input: string): number {
  return input.split('').filter((char) => /[a-zA-Z0-9]/.test(char)).length;
}

console.log(countLetterAndDigits('hel2!lo')); // 6
