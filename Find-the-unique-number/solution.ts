function uniqueNumber(arr: number[]): number {
  const occurrences: { [key: number]: number } = {};

  for (const n of arr) {
    occurrences[n] = (occurrences[n] || 0) + 1;
  }

  for (const key in occurrences) {
    if (occurrences[key] === 1) {
      return Number(key);
    }
  }

  return -1;
}

console.log(uniqueNumber([1, 1, 1, 0.5, 1, 1]));
