function warnTheSheep(queue: string[]): string {
  const wolfIndex = queue.findIndex((animal) => animal === 'wolf');
  const sheepPosition = queue.length - wolfIndex - 1;

  if (wolfIndex === queue.length - 1) {
    return 'Pls go away and stop eating my sheep';
  } else {
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
  }
}

console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep']));
