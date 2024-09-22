function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth) {
    var months = 0;
    var savings = 0;
    var priceOld = startPriceOld;
    var priceNew = startPriceNew;
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
