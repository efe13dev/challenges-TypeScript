export function newAvg(arr: number[], newavg: number): number {
  // Paso 1: Calcular la suma de las donaciones actuales
  const sum = arr.reduce((a, b) => a + b, 0);

  // Paso 2: Calcular la donación necesaria para alcanzar el nuevo promedio deseado
  const target = newavg * (arr.length + 1) - sum;

  // Paso 3: Verificar si la donación calculada es positiva
  if (target <= 0) {
    // Paso 5: Si la donación no es positiva, lanzar un error con el mensaje esperado
    throw new Error('Expected New Average is too low');
  }

  // Paso 4: Si la donación es positiva, devolverla redondeada hacia arriba
  return Math.ceil(target);
}
