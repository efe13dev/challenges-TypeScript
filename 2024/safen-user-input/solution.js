"use strict";
function htmlSpecialChars(formData) {
    return formData
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
console.log(htmlSpecialChars('Hello, how would you & I fare?'));
