function addLength(str: string): string[] {
  return str.split(' ').map((word) => `${word} ${word.length}`);
}
console.log(addLength('May the force be with you'));
