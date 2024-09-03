function findLongest(array: number[]): number {
  return array.reduce((previus, current) =>
    previus.toString().length < current.toString().length ? current : previus
  );
}

console.log(findLongest([1, 10, 100]));
