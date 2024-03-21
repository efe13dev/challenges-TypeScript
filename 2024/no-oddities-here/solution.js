"use strict";
const noOdds = (values) => {
    const filterValues = values.filter((item) => item % 2 == 0);
    return filterValues;
};
console.log(noOdds([0, 1, 2, 3]));
