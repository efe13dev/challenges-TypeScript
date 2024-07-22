function sameCase(a: string, b: string): number {
  if (!a || !b) return -1; // Retorna -1 si alguno de los strings está vacío.
  if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) return -1; // Retorna -1 si alguno de los caracteres no es una letra.

  if (
    (a === a.toLowerCase() && b === b.toLowerCase()) ||
    (a === a.toUpperCase() && b === b.toUpperCase())
  ) {
    return 1;
  }
  return 0;
}

console.log(sameCase('C', 'A'));
