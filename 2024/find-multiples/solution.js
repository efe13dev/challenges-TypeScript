function findMultiples(integer, limit) {
    var multiples = [];
    for (var i = integer; i <= limit; i += integer) {
        multiples.push(i);
    }
    return multiples;
}
console.log(findMultiples(5, 25));
