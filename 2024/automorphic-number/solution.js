"use strict";
const automorphic = (n) => `${n * n}`.endsWith(String(n)) ? 'Automorphic' : 'Not!!';
console.log(automorphic(25));
