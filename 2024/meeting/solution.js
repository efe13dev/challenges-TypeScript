"use strict";
function meeting(s) {
    s = s.toUpperCase();
    const names = s.split(';');
    const tuplesNames = names.map((name) => name.split(':'));
    const orderedNames = tuplesNames.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        return a[1].localeCompare(b[1]);
    });
    const formatedNames = orderedNames
        .map(([first, last]) => `(${last}, ${first})`)
        .join('');
    return formatedNames;
}
const input = 'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn';
console.log(meeting(input));
