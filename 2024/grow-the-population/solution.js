export const nbYear = (p0, percent, aug, p) => {
    let currentPopulation = p0;
    let years = 0;
    const growthRate = percent / 100;
    while (currentPopulation < p) {
        currentPopulation += Math.floor(currentPopulation * growthRate) + aug;
        years++;
    }
    return years;
};
console.log(nbYear(1500, 5, 100, 5000));
