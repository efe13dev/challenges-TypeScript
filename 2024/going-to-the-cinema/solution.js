"use strict";
function movie(card, ticket, perc) {
    let aSistem = 0;
    let bSistem = card;
    let actualPriceTicket = ticket * perc;
    let n = 0;
    while (Math.ceil(bSistem) >= aSistem) {
        n++;
        aSistem = ticket * n;
        bSistem += actualPriceTicket;
        actualPriceTicket *= perc;
    }
    return n;
}
console.log(movie(500, 15, 0.9));
