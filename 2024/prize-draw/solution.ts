export function rank(st: string, we: number[], n: number): string {
  if (st.length === 0) {
    return "No participants";
  }
  if (n > st.split(",").length) {
    return "Not enough participants";
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const names = st.split(",");
  const som: number[] = [];
  for (let i = 0; i < names.length; i++) {
    let sum = names[i].length;
    for (let j = 0; j < names[i].length; j++) {
      sum += alphabet.indexOf(names[i][j].toLowerCase()) + 1;
    }
    som.push(sum * we[i]);
  }
  const result = names
    .map((name, index) => ({ name, som: som[index] }))
    .sort((a, b) => {
      if (a.som === b.som) {
        return a.name.localeCompare(b.name);
      }
      return b.som - a.som;
    })
    .map((obj) => obj.name);
  return result[n - 1];
}
