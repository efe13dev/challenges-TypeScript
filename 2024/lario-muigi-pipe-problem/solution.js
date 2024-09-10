function pipeFix(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    var min = Math.min.apply(Math, numbers);
    var max = Math.max.apply(Math, numbers);
    var fixedPipes = [];
    for (var i = min; i <= max; i++) {
        fixedPipes.push(i);
    }
    return fixedPipes;
}
console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));
console.log(pipeFix([1, 2, 3, 12]));
