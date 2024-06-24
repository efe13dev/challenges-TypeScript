function findMultiples(integer: number, limit: number): number[] {
  let multiples: number[] = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
}

console.log(findMultiples(5, 25));
