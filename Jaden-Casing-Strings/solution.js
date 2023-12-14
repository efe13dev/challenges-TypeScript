"use strict";
String.prototype.toJadenCase = function () {
    const words = this.split(' ');
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    const jadenCaseString = capitalizedWords.join(' ');
    return jadenCaseString;
};
console.log("How can mirrors be real if our eyes aren't real".toJadenCase());
