function partList(arr) {
    var result = [];
    for (var i = 1; i < arr.length; i++) {
        var firstPart = arr.slice(0, i).join(' ');
        var secondPart = arr.slice(i).join(' ');
        result.push([firstPart, secondPart]);
    }
    return result;
}
console.log(partList(['az', 'toto', 'picaro', 'zone', 'kiwi']));
