function partList(arr: string[]): string[][] {
  let result: string[][] = [];

  for (let i = 1; i < arr.length; i++) {
    const firstPart = arr.slice(0, i).join(' ');
    const secondPart = arr.slice(i).join(' ');
    result.push([firstPart, secondPart]);
  }

  return result;
}

console.log(partList(['az', 'toto', 'picaro', 'zone', 'kiwi']));
