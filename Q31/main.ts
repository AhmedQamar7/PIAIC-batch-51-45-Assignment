let userNames : string[] = [`admin`,`Ahmed`,`Usman`,`Sufiyan`,`Abeer`];

function greetUser(username: string[]): void {
    if (username.length === 0){
        console.log(`We need to find same user!`);
        return;
    }

    for (const username of usernames){
        if(userName.toLowerCase() === `admin`){
            console.log("Hello admin! would you like to see a status report?");
        }else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

console.log(`For non empty username:\n`)
greetUser(username);

userName = [];

console.log(`/n/n For empty username:\n`)
greetUser(userName);

export{};