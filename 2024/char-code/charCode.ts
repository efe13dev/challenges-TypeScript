export function charCode(str: string): number {
  // Paso 1: Convertir cada carácter en su código ASCII y concatenarlos
  const total1 = str
    .split('')
    .map((char) => char.charCodeAt(0))
    .join('');

  // Paso 2: Reemplazar todas las incidencias del número 7 con el número 1
  const total2 = total1.replace(/7/g, '1');

  // Paso 3: Calcular la suma de los dígitos de total1 y total2
  const sumDigits = (numStr: string): number =>
    numStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  const sumTotal1 = sumDigits(total1);
  const sumTotal2 = sumDigits(total2);

  // Paso 4: Devolver la diferencia entre las dos sumas
  return sumTotal1 - sumTotal2;
}
