"use strict";
const userName = [`admin`, `Ali`, `Ahmed`, `Sufiyan`, `Abeer`];
function greetUsers() {
    for (const i in userName) {
        if (userName[i].toLowerCase() === `admin`) {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${userName[i]}, thank you for logging in again.`);
        }
    }
}
greetUsers();
