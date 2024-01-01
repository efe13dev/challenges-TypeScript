"use strict";
function smallEnough(a, limit) {
    return a.every((item) => item <= limit);
}
console.log(smallEnough([66, 101], 200));
