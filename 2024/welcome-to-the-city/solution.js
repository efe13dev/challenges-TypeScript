function sayHello(name, city, state) {
    return "Hello ".concat(name.join(' '), "! Welcome to ").concat(city, ", ").concat(state, "!");
}
console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
