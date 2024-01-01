function move(pos: number, roll: number): number {
  return pos + roll * 2;
}

console.log(move(3, 6));
