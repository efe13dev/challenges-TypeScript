'use strict';
function xo(str) {
  let xCount = 0;
  let oCount = 0;
  const arrayStr = str.split('');
  arrayStr.forEach((char) => {
    if (char.toLowerCase() === 'x') xCount++;
    if (char.toLowerCase() === 'o') oCount++;
  });
  return xCount === oCount ? true : false;
}
console.log(xo('xxxooo'));
