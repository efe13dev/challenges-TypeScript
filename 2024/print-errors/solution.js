"use strict";
function printerError(s) {
    const errorCount = s.split('').filter(char => char > 'm').length;
    return `${errorCount}/${s.length}`;
}
console.log(printerError("aaabbbbhaijjjm"));
