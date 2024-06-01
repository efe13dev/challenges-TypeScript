function isTriangle(a: number, b: number, c: number): boolean {
  if (a + b > c && a + c > b && c + b > a) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(1, 2, 2));
