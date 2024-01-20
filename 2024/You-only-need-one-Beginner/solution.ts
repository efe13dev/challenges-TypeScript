const check = (a: (string | number)[], x: string | number): boolean => {
  return a.includes(x);
};
console.log(check([66, 101], 66));
