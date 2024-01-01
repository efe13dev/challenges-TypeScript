const digitize = (n: number): number[] => {
  return Array.from(String(n), Number).reverse();
};

console.log(digitize(35231));
