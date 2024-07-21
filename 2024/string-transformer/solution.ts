function stringTransformer(str: string): string {
  const changedCaseStr = str
    .split('')
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join('');

  const reversedWordString = changedCaseStr.split(' ').reverse().join(' ');

  return reversedWordString;
}

console.log(stringTransformer('Example Input'));
