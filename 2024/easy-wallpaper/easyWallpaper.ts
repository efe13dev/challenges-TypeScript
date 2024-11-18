export function wallpaper(l: number, w: number, h: number): string {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty'
  ];

  // Si alguna dimensión es 0, no necesitamos papel
  if (l * w * h === 0) return numbers[0];

  // Calcular área total de las paredes (2 paredes largas + 2 cortas) * altura
  const area = (2 * l + 2 * w) * h;

  // Calcular número de rollos necesarios
  // - área total / (ancho del rollo * largo del rollo)
  // - multiplicar por 1.15 para el 15% extra
  // - redondear hacia arriba para tener rollos completos
  const rolls = Math.ceil((area * 1.15) / (0.52 * 10));

  // Devolver el número en palabras (limitado a 20)
  return numbers[Math.min(rolls, 20)];
}
