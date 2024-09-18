const isTheStringUppercase = (string: string): boolean =>
  string === string.toUpperCase();

console.log(isTheStringUppercase('HELLO'));
console.log(isTheStringUppercase('Hello'));
console.log(isTheStringUppercase('hello'));
