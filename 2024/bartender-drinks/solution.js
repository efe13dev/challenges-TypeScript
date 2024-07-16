"use strict";
function getDrinkByProfession(profession) {
    const drinksByProfession = {
        jabroni: 'Patron Tequila',
        'school counselor': 'Anything with Alcohol',
        programmer: 'Hipster Craft Beer',
        'bike gang member': 'Moonshine',
        politician: 'Your tax dollars',
        rapper: 'Cristal'
    };
    const normalizedProfession = profession.toLowerCase();
    return drinksByProfession[normalizedProfession] || 'Beer';
}
console.log(getDrinkByProfession('jabrOni'));
