function scale(s: string, k: number, n: number): string {
  if (s === '') return '';

  const lines = s.split('\n');
  const scaledLines = lines.map((line) => {
    const scaledLine = line
      .split('')
      .map((char) => char.repeat(k))
      .join('');
    return (Array(n) as any[]).fill(scaledLine).join('\n');
  });

  return scaledLines.join('\n');
}

console.log(scale('abcd\nefgh\nijkl\nmnop', 2, 3));
