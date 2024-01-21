"use strict";
function hello(name = '') {
    if (name) {
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return `Hello, ${formattedName}!`;
    }
    else {
        return 'Hello, World!';
    }
}
console.log(hello('johN'));
