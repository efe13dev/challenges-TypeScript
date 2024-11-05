export function isVeryEvenNumber(n: number): boolean {
  // Si el número es menor que 10, simplemente verificamos si es par
  if (n < 10) {
    return n % 2 === 0;
  }

  // Convertimos el número a string para poder sumar sus dígitos
  const sum = String(n)
    .split('')
    .reduce((acc, digit) => acc + parseInt(digit), 0);

  // Llamada recursiva con la suma de los dígitos
  return isVeryEvenNumber(sum);
}
