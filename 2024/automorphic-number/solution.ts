const automorphic = (n: number): string =>
  `${n * n}`.endsWith(String(n)) ? 'Automorphic' : 'Not!!';

console.log(automorphic(25));
