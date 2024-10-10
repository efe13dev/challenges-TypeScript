function findNb(m: number): number {
  let n = 0;
  while (m > 0) {
    n++;
    m -= n ** 3;
  }
  return m === 0 ? n : -1;
}

console.log(findNb(4183059834009));
