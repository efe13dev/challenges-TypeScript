function sortMe(names) {
    return names.sort(function (a, b) { return a.localeCompare(b); });
}
console.log(sortMe(['one', 'two', 'three']));
