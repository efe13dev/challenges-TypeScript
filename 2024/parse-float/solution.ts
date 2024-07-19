function parseFloat(s: string): number | null {
  const result = Number.parseFloat(s);

  return isNaN(result) ? null : result;
}

console.log(parseFloat('2.5'));
