var pn = "aHmEd QaMaR";
console.log("Name : ".concat(pn));
console.log("Name in lowercase : ".concat(pn.toLowerCase()));
console.log("Name in uppercase : ".concat(pn.toUpperCase()));
var titleCaseName = pn.split(" ");
for (var i = 0; i < titleCaseName.length; i++) {
    titleCaseName[i] = titleCaseName[i].charAt(0).toUpperCase() + titleCaseName[i].slice(1).toLowerCase();
}
console.log(titleCaseName.toString().replace(/,/g, ' '));
