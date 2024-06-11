function orderedCount(str: string): [string, number][] {
  let countDict: { [key: string]: number } = {};
  let order: string[] = [];

  for (let char of str) {
    if (!countDict.hasOwnProperty(char)) {
      countDict[char] = 1;
      order.push(char);
    } else {
      countDict[char] += 1;
    }
  }

  let result: [string, number][] = order.map((char) => [char, countDict[char]]);

  return result;
}

// Ejemplo de uso:
console.log(orderedCount('abracadabra'));
