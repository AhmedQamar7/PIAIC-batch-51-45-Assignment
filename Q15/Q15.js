var guestlist = [
    "zia",
    "sufiyan",
    "abeer",
    "usama",
    "hamza",
    "okasaha"
];
var nGuest = "okasaha";
var NewGuest = "ahmed";
var indexOfnGuest = guestlist.indexOf(nGuest);
// console.log(indexOfnGuest)
if (indexOfnGuest !== -1) {
    guestlist[indexOfnGuest] = NewGuest;
}
console.log(guestlist);
