export function isNarcissisticValue(value: number): boolean {
  const digits = value.toString().split('').map(Number);
  // Se extrae la propiedad length del objeto array digits y se asigna a la constante power
  const { length: power } = digits;
  const sum = digits.reduce((acc, digit) => acc + digit ** power, 0);
  return sum === value;
}
