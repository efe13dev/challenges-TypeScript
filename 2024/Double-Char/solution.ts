function doubleChar(str: string): string {
  return str
    .split('')
    .map((char) => char.repeat(2))
    .join('');
}

console.log(doubleChar('Adidas'));
