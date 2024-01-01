function sumMix(x: (string | number)[]): number {
  return x.reduce(
    (acc: number, item) =>
      typeof item === 'string' ? Number(item) + acc : item + acc,
    0
  );
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
