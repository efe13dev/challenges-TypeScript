"use strict";
function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    let months = 0;
    let savings = 0;
    let priceOld = startPriceOld;
    let priceNew = startPriceNew;
    while (priceOld + savings < priceNew) {
        months++;
        if (months % 2 === 0) {
            percentLossByMonth += 0.5;
        }
        priceOld -= priceOld * (percentLossByMonth / 100);
        priceNew -= priceNew * (percentLossByMonth / 100);
        savings += savingPerMonth;
    }
    return [months, Math.round(priceOld + savings - priceNew)];
}
