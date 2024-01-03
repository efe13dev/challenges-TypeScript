function flattenAndSort(inputArray: number[][]): number[] {
  const flattenedArray = inputArray.flat();

  const sortedArray = flattenedArray.sort((a, b) => a - b);

  return sortedArray;
}

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
