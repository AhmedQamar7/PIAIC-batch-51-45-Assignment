

const bouguet = {
    name: "Spring Delight",
    price : 200,
    description: "beautiful arrangement of spring flowers"
}

let bouguets: Array<typeof bouguet> = [];

bouguets.push(bouguet);
bouguets.push({
    name: "Summer bliss",
    price : 300,
    description: "beautiful arrangement of summer flowers"
})

let bouguet3 = {
    name: "Autumn Delight",
    price : 400,
    description: "beautiful arrangement of autumn flowers"
}

bouguets.push(bouguet3);

bouguets.push({
    name: "Winter bliss",
    price : 500,
    description: "beautiful arrangement of winter flowers"
})

// functin to display bouquets

function displayBouquets(bouguets: Array<typeof bouguet>)
{
    for(let i of bouguets) {
        console.log(`
        title: ${i.name}
        description: ${i.description}
        price: ${i.price}
        _____________________\n`);
    }
}
    
displayBouquets(bouguets);
