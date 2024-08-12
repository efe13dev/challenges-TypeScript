function isSquare(n) {
  if (n < 0) return false;
  var sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
}
console.log(isSquare(26));
