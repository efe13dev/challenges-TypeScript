function rowWeights(arr: number[]): [number, number] {
  const result = arr.reduce(
    (acc, count, index) => {
      if (index % 2 === 0) {
        acc[0] += count;
      } else {
        acc[1] += count;
      }
      return acc;
    },
    [0, 0]
  );

  return result as [number, number];
}
console.log(rowWeights([50, 60, 70, 80]));
