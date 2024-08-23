function dutyFree(
  normPrice: number,
  discount: number,
  holiday: number
): number {
  const savingsPerBottle = normPrice * (discount / 100);
  return Math.floor(holiday / savingsPerBottle);
}
console.log(dutyFree(12, 50, 1000));
