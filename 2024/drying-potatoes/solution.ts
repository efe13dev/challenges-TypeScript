function potatoes(p0: number, w0: number, p1: number): number {
  const dryMatter = (w0 * (100 - p0)) / 100;
  const finalWeight = (dryMatter * 100) / (100 - p1);
  return Math.floor(finalWeight);
}

console.log(potatoes(82, 127, 80));
