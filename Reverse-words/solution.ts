function reverseWords(str: string): string {
  const words = str.split(' ');
  const reverse = words.map((word) => word.split('').reverse().join(''));
  return reverse.join(' ');
}

console.log(reverseWords('double  spaced  words'));
