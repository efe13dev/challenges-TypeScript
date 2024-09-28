function potatoes(p0, w0, p1) {
    var dryMatter = (w0 * (100 - p0)) / 100;
    var finalWeight = (dryMatter * 100) / (100 - p1);
    return Math.floor(finalWeight);
}
console.log(potatoes(82, 127, 80));
