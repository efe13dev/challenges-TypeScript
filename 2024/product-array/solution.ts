function productArray(arr: number[]): number[] {
  const { length: n } = arr;
  const result: number[] = new Array<number>(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
}

console.log(productArray([1, 5, 2]));
