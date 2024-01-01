function sumDigits(n: number): number {
  const numberString = Math.abs(n).toString();
  return numberString.split('').reduce((acc, item) => acc + Number(item), 0);
}
console.log(sumDigits(-32));
