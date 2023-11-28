function getCount(str: string): number {
  let count = 0;
  const regex = /^[aeiou]+$/i;
  str.split('').forEach((char) => {
    if (regex.test(char)) {
      count++;
    }
  });
  return count;
}

console.log(getCount('abracadabra'));
