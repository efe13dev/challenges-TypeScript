export function reversedSequence(n: number): number[] {
  const resultado: number[] = [];

  for (let i = n; i >= 1; i--) {
    resultado.push(i);
  }

  return resultado;
}
