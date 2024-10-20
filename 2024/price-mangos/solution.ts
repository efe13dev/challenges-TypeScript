function mango(quantity: number, price: number): number {
  const free = Math.floor(quantity / 3);
  return (quantity - free) * price;
}

console.log(mango(5, 3));
