function greet(name: string, owner: string): string {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

console.log(greet('daniel', 'daniel'));
