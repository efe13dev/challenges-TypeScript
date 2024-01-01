function kata(dna: string) {
  const result: string[] = [];
  const arrayDna = dna.split('');
  arrayDna.forEach((item) => {
    if (item === 'A') {
      result.push('T');
    } else if (item === 'T') {
      result.push('A');
    } else if (item === 'C') {
      result.push('G');
    } else if (item === 'G') {
      result.push('C');
    }
  });
  return result.join('');
}

console.log(kata('ATTGC'));
