function isSortedAndHow(array) {
    var isAscending = array.every(function (val, i, arr) { return i === 0 || arr[i - 1] <= val; });
    var isDescending = array.every(function (val, i, arr) { return i === 0 || arr[i - 1] >= val; });
    if (isAscending) {
        return 'yes, ascending';
    }
    else if (isDescending) {
        return 'yes, descending';
    }
    else {
        return 'no';
    }
}
console.log(isSortedAndHow([15, 7, 3, -8]));
