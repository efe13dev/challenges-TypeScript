function bump(bumps: string): string {
  let bumpsCount = 0;
  bumps.split('').forEach((bump) => {
    if (bump === 'n') {
      bumpsCount++;
    }
  });
  return bumpsCount <= 15 ? 'Woohoo!' : 'Car Dead';
}

console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));
