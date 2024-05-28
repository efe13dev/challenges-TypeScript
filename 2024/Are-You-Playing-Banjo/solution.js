"use strict";
function areYouPlayingBanjo(name) {
    return name.charAt(0).toLocaleLowerCase() === 'r'
        ? name + ' plays banjo'
        : name + ' does not play banjo';
}
console.log(areYouPlayingBanjo('Ringo'));
console.log(areYouPlayingBanjo('Adam'));
