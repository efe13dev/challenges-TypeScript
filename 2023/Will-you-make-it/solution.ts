const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
  return mpg * fuelLeft >= distance;
};
console.log(zeroFuel(50, 25, 2));
