function productArray(arr) {
    var n = arr.length;
    var result = new Array(n).fill(1);
    var leftProduct = 1;
    for (var i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= arr[i];
    }
    var rightProduct = 1;
    for (var i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= arr[i];
    }
    return result;
}
console.log(productArray([1, 5, 2]));
