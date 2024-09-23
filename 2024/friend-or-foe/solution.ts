function friend(friends: string[]): string[] {
  return friends.filter((friend) => friend.length === 4);
}

console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous'])); // ["Ryan", "Yous"]
console.log(friend(['Peter', 'Stephen', 'Joe'])); // []
