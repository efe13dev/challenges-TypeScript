function sortMyString(s: string): string {
  const odd: string[] = [];
  const even: string[] = [];
  const arrS = s.split('');
  arrS.forEach((char, index) => {
    index % 2 === 0 ? even.push(char) : odd.push(char);
  });

  return even.join('') + ' ' + odd.join('');
}

console.log(sortMyString('CodeWars'));
