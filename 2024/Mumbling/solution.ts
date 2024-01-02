function accum(s: string): string {
  return s
    .split('')
    .map((char, index) => {
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join('-');
}

console.log(accum('cwAt'));
