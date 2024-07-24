function divCon(x: (string | number)[]): number {
  const numbers: number[] = [];
  const strings: number[] = [];

  x.forEach((item) => {
    if (typeof item === 'number') {
      numbers.push(item);
    }
    if (typeof item === 'string') {
      strings.push(Number(item));
    }
  });

  const sumNumbers = numbers.reduce((acc, item) => acc + item, 0);
  const sumStrings = strings.reduce((acc, item) => acc + item, 0);

  return sumNumbers - sumStrings;
}

console.log(divCon([9, 3, '7', '3']));
