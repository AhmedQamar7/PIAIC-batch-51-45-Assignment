"use strict";
let guestlist = [
    "zia",
    "sufiyan",
    "abeer",
    "usama",
    "hamza",
    "okasaha"
];
for (let guest of guestlist) {
    console.log(`hello ${guest}, we found abigger table for dinner`);
}
let nGuestAtB = "ubaid";
guestlist.unshift(nGuestAtB);
console.log(guestlist);
let nGuestInM = "A.R.Qamar";
let middleIndex = Math.floor(guestlist.length / 2);
guestlist.splice(middleIndex, 0, nGuestInM);
console.log(guestlist);
let nGuestAtE = "ammad";
guestlist.push(nGuestAtE);
console.log(guestlist);
console.log("New Set of Invitation");
for (let guest of guestlist) {
    console.log(`dear ${guest}, you're invited in dinner tonight`);
}
