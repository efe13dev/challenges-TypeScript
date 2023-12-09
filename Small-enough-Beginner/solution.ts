function smallEnough(a: number[], limit: number): boolean {
  return a.every((item) => item <= limit);
}

console.log(smallEnough([66, 101], 200));
