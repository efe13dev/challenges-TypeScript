function mango(quantity, price) {
    var free = Math.floor(quantity / 3);
    return (quantity - free) * price;
}
