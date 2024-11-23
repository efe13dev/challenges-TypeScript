export function countSmileys(arr: string[]): number {
  // Si el array está vacío, retornamos 0
  if (arr.length === 0) return 0;

  // Expresión regular que valida una carita sonriente
  // ^      - inicio de la cadena
  // [;:]   - ojos (: o ;)
  // [-~]?  - nariz opcional (- o ~)
  // [)D]   - boca () o D)
  // $      - fin de la cadena
  const smileyRegex = /^[;:][-~]?[)D]$/;

  // Filtramos las caritas válidas y contamos cuántas hay
  return arr.filter((face) => smileyRegex.test(face)).length;
}
