function revrot(str: string, sz: number): string {
  if (sz <= 0 || !str || sz > str.length) {
    return '';
  }

  let result = '';
  const chunks: string[] = [];
  for (let i = 0; i < str.length; i += sz) {
    chunks.push(str.slice(i, i + sz));
  }

  chunks.forEach((chunk) => {
    if (chunk.length === sz) {
      const digitSum = chunk
        .split('')
        .reduce((sum, digit) => sum + Math.pow(parseInt(digit), 3), 0);
      if (digitSum % 2 === 0) {
        result += chunk.split('').reverse().join('');
      } else {
        result += chunk.slice(1) + chunk[0];
      }
    }
  });

  return result;
}
console.log(revrot('123456987654', 6));
