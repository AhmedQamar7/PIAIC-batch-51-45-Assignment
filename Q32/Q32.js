"use strict";
const currentUsers = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const newUsers = ["Eve", "Fred", "Alice", "Grace", "Harry"];
for (const newUser of newUsers) {
    const lowercaseNewUser = newUser.toLowerCase();
    if (currentUsers.some((currentUser) => currentUser.toLowerCase() === lowercaseNewUser)) {
        console.log(`Username '${newUser}' is already taken. Please choose another username.`);
    }
    else {
        console.log(`Username '${newUser}' is available.`);
    }
}
