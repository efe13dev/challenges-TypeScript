export function consonantValue(s: string): number {
  // Función para obtener el valor de una letra (a=1, b=2, ..., z=26)
  const getLetterValue = (letter: string): number => letter.charCodeAt(0) - 96;

  // Dividir la cadena en subcadenas de consonantes
  const consonantGroups = s.split(/[aeiou]/);

  // Calcular el valor de cada subcadena de consonantes
  return Math.max(
    ...consonantGroups.map((group) =>
      [...group].reduce((sum, letter) => sum + getLetterValue(letter), 0)
    )
  );
}
