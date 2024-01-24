function cubeChecker(volume: number, side: number): boolean {
  if (volume <= 0 || side <= 0) {
    return false;
  }
  const expectedVolume = side ** 3;

  return volume === expectedVolume;
}
console.log(cubeChecker(8, 2));
