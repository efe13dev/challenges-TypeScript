function ispalindrome(x: string): boolean {
  const reverseX = x.split('').reverse().join('');

  return x.toLowerCase() === reverseX.toLowerCase();
}

console.log(ispalindrome('Abba'));
