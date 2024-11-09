export function pendulum(values: number[]): number[] {
  // Primero ordenamos los números de menor a mayor
  const sorted = values.sort((a, b) => a - b);
  const result: number[] = [];

  // Iteramos sobre los números ordenados
  sorted.forEach((num, index) => {
    if (index === 0) {
      // El primer número (el más pequeño) va en el centro
      result.push(num);
    } else if (index % 2 === 0) {
      // Los números en posiciones pares van a la izquierda
      result.unshift(num);
    } else {
      // Los números en posiciones impares van a la derecha
      result.push(num);
    }
  });

  return result;
}
