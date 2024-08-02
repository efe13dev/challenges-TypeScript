function multiplicationTable(size) {
    var table = [];
    for (var i = 1; i <= size; i++) {
        var row = [];
        for (var j = 1; j <= size; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}
console.log(multiplicationTable(3));
