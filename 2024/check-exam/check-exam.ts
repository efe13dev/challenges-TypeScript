export function checkExam(
  correctAnswers: string[],
  studentAnswers: string[]
): number {
  // Calcular la puntuación usando reduce
  const score = correctAnswers.reduce((total, correct, index) => {
    //const studentAnswer = studentAnswers[index];
    const [studentAnswer] = [studentAnswers[index]];

    // Si la respuesta está en blanco, suma 0
    if (studentAnswer === '') return total;

    // Si la respuesta es correcta, suma 4
    // Si la respuesta es incorrecta, resta 1
    return total + (studentAnswer === correct ? 4 : -1);
  }, 0);

  // Retornar 0 si el puntaje es negativo, de lo contrario retornar el puntaje
  return Math.max(0, score);
}
