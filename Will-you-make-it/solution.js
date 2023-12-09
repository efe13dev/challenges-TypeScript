'use strict';
const zeroFuel = (distance, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distance;
};
console.log(zeroFuel(50, 25, 2));
