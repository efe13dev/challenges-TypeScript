function evaporator(
  content: number,
  evapPerDay: number,
  threshold: number
): number {
  let days = 0;
  let remainingPercentage = 100;
  while (remainingPercentage > threshold) {
    remainingPercentage *= 1 - evapPerDay / 100;
    days++;
  }

  return days;
}
console.log(evaporator(10, 10, 5));
