let age : number  = 1;

if (age < 2){
    console.log(`Age is ${age}, The person is baby.`);
} else if (age < 4){
    console.log(`Age is ${age}, The person is toddler.`);
} else if (age < 13){
    console.log(`Age is ${age}, The person is kid.`);
} else if (age < 20){
    console.log(`Age is ${age}, The person is teenager.`);
} else if (age < 65){
    console.log(`Age is ${age}, The person is adult.`);
} else{
    console.log(`Age is ${age}, The person is elder.`);
}

console.log(`\n\tTest with different age\n`);

age = 12;

if (age < 2){
    console.log(`Age is ${age}, The person is baby.`);
} else if (age < 4){
    console.log(`Age is ${age}, The person is toddler.`);
} else if (age < 13){
    console.log(`Age is ${age}, The person is kid.`);
} else if (age < 20){
    console.log(`Age is ${age}, The person is teenager.`);
} else if (age < 65){
    console.log(`Age is ${age}, The person is adult.`);
} else{
    console.log(`Age is ${age}, The person is elder.`);
}
