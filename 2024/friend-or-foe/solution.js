function friend(friends) {
    return friends.filter(function (friend) { return friend.length === 4; });
}
console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous'])); // ["Ryan", "Yous"]
console.log(friend(['Peter', 'Stephen', 'Joe'])); // []
