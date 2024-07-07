function twoSort(s) {
    s.sort();
    var firstElement = s[0];
    var result = firstElement.split('').join('***');
    return result;
}
console.log(twoSort([
    'bitcoin',
    'take',
    'over',
    'the',
    'world',
    'maybe',
    'who',
    'knows',
    'perhaps'
]));
