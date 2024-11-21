export function sabbatical(val: number, happiness: number, s: string): string {
  const sabbaticalWord = 'sabbatical';
  const { length: count } = s
    .split('')
    .filter((char) => sabbaticalWord.includes(char));
  return val + happiness + count > 22
    ? 'Sabbatical! Boom!'
    : 'Back to your desk, boy.';
}
