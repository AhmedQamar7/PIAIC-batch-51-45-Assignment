"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName = [`admin`, `Ahmed`, `Usman`, `Sufiyan`, `Abeer`];
function greetUser(userNames) {
    if (userName.length === 0) {
        console.log(`We need to find same user!`);
        return;
    }
    for (const userName of userNames) {
        if (userName.toLowerCase() === `admin`) {
            console.log("Hello admin! would you like to see a status report?");
        }
        else {
            console.log(`Hello ${userName}, thank you for logging in again.`);
        }
    }
}
console.log(`For non empty username:\n`);
greetUser(userName);
userName = [];
console.log(`/n/n For empty username:\n`);
greetUser(userName);
