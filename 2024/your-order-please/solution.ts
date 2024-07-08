export function order(words: string): string {
  if (words === '') {
    return '';
  }

  const wordArray = words.split(' ');

  wordArray.sort((a, b) => {
    const matchA = a.match(/\d/);
    const matchB = b.match(/\d/);

    if (matchA === null || matchB === null) {
      return 0;
    }

    const numA = parseInt(matchA[0], 10);
    const numB = parseInt(matchB[0], 10);

    return numA - numB;
  });

  return wordArray.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
