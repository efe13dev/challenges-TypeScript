const getEvenNumbers = (numbersArray: number[]): number[] =>
  numbersArray.filter((number) => number % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
