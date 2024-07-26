function ispalindrome(x) {
    var reverseX = x.split('').reverse().join('');
    return x.toLowerCase() === reverseX.toLowerCase();
}
console.log(ispalindrome('Abba'));
