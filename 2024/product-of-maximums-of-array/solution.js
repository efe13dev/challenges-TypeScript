function maxProduct(numbers, size) {
    numbers.sort(function (a, b) { return b - a; });
    var product = 1;
    for (var i = 0; i < size; i++) {
        product *= numbers[i];
    }
    return product;
}
console.log(maxProduct([4, 3, 5], 2));
