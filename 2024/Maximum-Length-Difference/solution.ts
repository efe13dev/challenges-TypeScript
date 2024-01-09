function mxdiflg(a1: string[], a2: string[]) {
  if (a1.length === 0 || a2.length === 0) {
    return -1;
  }

  const lenghtsA1 = a1.map((word) => word.length);
  const lenghtsA2 = a2.map((word) => word.length);

  const maxA1 = Math.max(...lenghtsA1);
  const minA1 = Math.min(...lenghtsA1);
  const maxA2 = Math.max(...lenghtsA2);
  const minA2 = Math.min(...lenghtsA2);

  return Math.max(Math.abs(maxA1 - minA2), Math.abs(maxA2 - minA1));
}

const s1 = [
  'hoqq',
  'bbllkw',
  'oox',
  'ejjuyyy',
  'plmiis',
  'xxxzgpsssa',
  'xxwwkktt',
  'znnnnfqknaz',
  'qqquuhii',
  'dvvvwz'
];
const s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];

console.log(mxdiflg(s1, s2));
