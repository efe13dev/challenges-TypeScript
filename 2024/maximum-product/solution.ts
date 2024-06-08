function adjacentElementsProduct(arr: number[]): number {
  if (arr.length < 2) {
    throw new Error('El array debe contener al menos dos elementos.');
  }
  let result: number = arr[0] * arr[1];
  for (let i = 1; i < arr.length; i++) {
    let product: number = arr[i] * arr[i + 1];
    if (product > result) {
      result = product;
    }
  }
  return result;
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
