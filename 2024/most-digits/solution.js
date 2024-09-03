function findLongest(array) {
    return array.reduce(function (previus, current) {
        return previus.toString().length < current.toString().length ? current : previus;
    });
}
console.log(findLongest([1, 10, 100]));
