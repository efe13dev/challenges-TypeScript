function persistence(num: number): number {
  let numbersArray: string[] = num.toString().split('');

  if (numbersArray.length === 1) {
    return 0;
  }

  let count = 0;

  while (numbersArray.length > 1) {
    count++;

    const result = numbersArray.reduce((acc, item) => acc * Number(item), 1);

    numbersArray = result.toString().split('');
  }

  return count;
}

console.log(persistence(999));
