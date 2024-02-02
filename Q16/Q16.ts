// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

let guestlist: Array<string> = [
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

let nGuestAtB: string= "ubaid"
guestlist.unshift(nGuestAtB)

console.log(guestlist)

let nGuestInM: string= "A.R.Qamar"
let middleIndex: number= Math.floor(guestlist.length/2)
guestlist.splice(middleIndex, 0, nGuestInM)

console.log(guestlist)

let nGuestAtE: string= "ammad"
guestlist.push(nGuestAtE)

console.log(guestlist)

console.log("New Set of Invitation")
for(let guest of guestlist){
    console.log(`dear ${guest}, you're invited in dinner tonight`)
}