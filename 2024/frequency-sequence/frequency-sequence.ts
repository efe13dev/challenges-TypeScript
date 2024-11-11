export function frequencySequence(s: string, sep: string): string {
  return s
    .split('')
    .map((char) => s.split(char).length - 1)
    .join(sep);
}
