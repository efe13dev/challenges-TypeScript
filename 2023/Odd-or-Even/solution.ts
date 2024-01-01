function oddOrEven(array: number[]): 'even' | 'odd' {
  const totalSum = array.reduce((acc, item) => acc + item, 0);
  return totalSum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([0, 1, 3]));
