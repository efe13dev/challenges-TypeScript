function sayHello(name: string[], city: string, state: string): string {
  return `Hello ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
