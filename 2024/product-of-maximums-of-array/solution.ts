function maxProduct(numbers: number[], size: number): number {
  numbers.sort((a, b) => b - a);

  let product = 1;
  for (let i = 0; i < size; i++) {
    product *= numbers[i];
  }
  return product;
}
console.log(maxProduct([4, 3, 5], 2));
