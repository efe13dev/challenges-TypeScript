function noBoringZeros(n: number): number {
  let stringNumber = n.toString();
  let numberWithoutZeros = stringNumber.replace(/0+$/, '');
  return Number(numberWithoutZeros);
}

console.log(noBoringZeros(1050));
