function twoSort(s: string[]): string {
  s.sort();
  const firstElement = s[0];
  const result = firstElement.split('').join('***');
  return result;
}

console.log(
  twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps'
  ])
);
