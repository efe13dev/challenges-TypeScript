function shorterReverseLonger(a: string, b: string): string {
  if (a.length === b.length) {
    return b + a.split('').reverse().join('') + b;
  }
  return a.length < b.length
    ? a + b.split('').reverse().join('') + a
    : b + a.split('').reverse().join('') + b;
}

console.log(shorterReverseLonger('abc', 'def'));
console.log(shorterReverseLonger('first', 'abcde'));
console.log(shorterReverseLonger('hello', 'bau'));
