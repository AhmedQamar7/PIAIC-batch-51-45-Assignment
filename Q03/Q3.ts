// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase.

let pn = "aHmEd QaMaR";
console.log(`Name : ${pn}`);
console.log(`Name in lowercase : ${pn.toLowerCase()}`);
console.log(`Name in uppercase : ${pn.toUpperCase()}`);
    
let titleCaseName = pn.split(` `);
    for(let i=0; i < titleCaseName.length; i++){
        titleCaseName[i] = titleCaseName[i].charAt(0).toUpperCase() +titleCaseName[i].slice(1).toLowerCase();

    }
console.log(titleCaseName.toString().replace(/,/g , ' '));