"use strict";
function peopleWithAgeDrink(old) {
    switch (true) {
        case old < 14:
            return 'drink toddy';
        case old < 18:
            return 'drink coke';
        case old < 21:
            return 'drink beer';
        case old >= 21:
            return 'drink whisky';
        default:
            return 'unknown age'; // Por si acaso
    }
}
// Ejemplos de uso:
console.log(peopleWithAgeDrink(13)); // "drink toddy"
console.log(peopleWithAgeDrink(17)); // "drink coke"
console.log(peopleWithAgeDrink(18)); // "drink beer"
console.log(peopleWithAgeDrink(20)); // "drink beer"
console.log(peopleWithAgeDrink(30)); // "drink whisky"
