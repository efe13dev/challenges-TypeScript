'use strict';
function number(busStops) {
  const peopleUp = busStops.reduce((a, b) => a + b[0], 0);
  const peopleDown = busStops.reduce((a, b) => a + b[1], 0);
  return peopleUp - peopleDown;
}
console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8]
  ])
);
