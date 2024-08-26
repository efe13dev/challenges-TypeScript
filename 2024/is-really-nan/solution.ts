function isReallyNaN(x: any): boolean {
  return typeof x === 'number' && isNaN(x);
}

console.log(isReallyNaN(NaN));
console.log(isReallyNaN('37'));
console.log(isReallyNaN(37));
