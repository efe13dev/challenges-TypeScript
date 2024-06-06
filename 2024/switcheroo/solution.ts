function switchero(x: string): string {
  let result = '';
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) === 'a') {
      result += 'b';
    }
    if (x.charAt(i) === 'b') {
      result += 'a';
    }
    if (x.charAt(i) === 'c') {
      result += 'c';
    }
  }
  return result;
}

console.log(switchero('abc'));
