export function rakeGarden(garden: string): string {
  return garden
    .split(' ')
    .map((el) => (el === 'rock' ? el : 'gravel'))
    .join(' ');
}
