export function buildTower(nFloors: number): string[] {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    const space = ' '.repeat(nFloors - i - 1);
    const star = '*'.repeat(i * 2 + 1);
    tower.push(space + star + space);
  }
  return tower;
}
