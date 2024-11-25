export function petYears(humanYears: number): [number, number, number] {
  let catYears = 0;
  let dogYears = 0;

  // Cálculo para el primer año
  if (humanYears >= 1) {
    catYears += 15;
    dogYears += 15;
  }

  // Cálculo para el segundo año
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }

  // Cálculo para los años siguientes
  if (humanYears >= 3) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
}
