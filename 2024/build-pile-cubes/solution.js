function findNb(m) {
    var n = 0;
    while (m > 0) {
        n++;
        m -= Math.pow(n, 3);
    }
    return m === 0 ? n : -1;
}
console.log(findNb(4183059834009));
