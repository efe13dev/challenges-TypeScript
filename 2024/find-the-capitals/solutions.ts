function capitals(word: string): number[] {
  let result: number[] = []; // Inicializa result como una lista vacía

  word.split('').forEach((char, index) => {
    if (char === char.toUpperCase()) {
      result.push(index); // Agrega el índice en lugar del carácter
    }
  });

  return result; // Retorna el resultado
}

console.log(capitals('CodEWaRs')); // Output: [0, 3, 4, 6]
