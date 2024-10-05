"use strict";
function sortMe(names) {
    return names.sort((a, b) => a.localeCompare(b));
}
console.log(sortMe(['one', 'two', 'three']));
