'use strict';
// type BinaryDigit = 0 | 1;
function binaryArrayToNumber(arr) {
  const binaryString = arr.join('');
  const decimalValue = parseInt(binaryString, 2);
  return decimalValue;
}
console.log(binaryArrayToNumber([1, 0, 1, 1]));
