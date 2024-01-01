"use strict";
const distinct = (a) => {
    return Array.from(new Set(a));
};
console.log(distinct([1, 2, 1, 1, 3, 2]));
