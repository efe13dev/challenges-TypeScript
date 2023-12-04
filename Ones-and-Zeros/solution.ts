function binaryArrayToNumber(arr: (0 | 1)[]): number {
  const binaryString = arr.join('');
  const decimalValue = parseInt(binaryString, 2);
  return decimalValue;
}

console.log(binaryArrayToNumber([1, 0, 1, 1]));
