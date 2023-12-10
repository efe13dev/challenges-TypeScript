function descendingOrder(n: number): number {
  return Number(n.toString().split('').sort().reverse().join(''));
}

console.log(descendingOrder(42145));
