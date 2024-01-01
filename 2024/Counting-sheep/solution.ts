function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
  return arrayOfSheep.filter((sheep) => sheep === true).length;
}

console.log(countSheeps([true, true, true, false, true]));
