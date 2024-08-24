function catAndMouse(x) {
    var distance = x.indexOf('m') - x.indexOf('C');
    if (distance > 0 && distance <= 4) {
        return 'Caught!';
    }
    else {
        return 'Escaped!';
    }
}
console.log(catAndMouse('C..m'));
console.log(catAndMouse('C.....m'));
