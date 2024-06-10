function findAverage(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  } else {
    const total = arr.reduce((acc, count) => acc + count, 0);
    return total / arr.length;
  }
}
console.log(findAverage([5, 6, 8]));
