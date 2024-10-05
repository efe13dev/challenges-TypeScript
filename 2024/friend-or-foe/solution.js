"use strict";
function friend(friends) {
    return friends.filter((friend) => friend.length === 4);
}
console.log(friend(['Ryan', 'Kieran', 'Jason', 'Yous'])); // ["Ryan", "Yous"]
console.log(friend(['Peter', 'Stephen', 'Joe'])); // []
