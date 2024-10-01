export function balancedNum(number: number): string {
  const digits = String(number).split('').map(Number);
  const length = digits.length;
  const midIndex = Math.floor(length / 2);

  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < midIndex - (length % 2 === 0 ? 1 : 0); i++) {
    leftSum += digits[i];
    rightSum += digits[length - 1 - i];
  }

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNum(7));
console.log(balancedNum(295591));
console.log(balancedNum(959));
console.log(balancedNum(27102983));
