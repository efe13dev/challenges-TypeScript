function multiplyArrayValues(array: number[]): number {
  const result = array.reduce(
    (accumulator: number, currentValue: number) => accumulator * currentValue,
    1
  );

  return result;
}

const inputArray = [1, 2, 3, 4];
const result = multiplyArrayValues(inputArray);
console.log(result);
