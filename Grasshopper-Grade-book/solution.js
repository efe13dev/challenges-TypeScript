'use strict';
function getGrade(a, b, c) {
  const total = (a + b + c) / 3;
  if (total >= 90) {
    return 'A';
  } else if (total >= 80) {
    return 'B';
  } else if (total >= 70) {
    return 'C';
  } else if (total >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
console.log(getGrade(95, 90, 93));
