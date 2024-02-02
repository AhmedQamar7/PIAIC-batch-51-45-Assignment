function creatFruits(name: string, color: string, taste: string)
{
    return{
        name,
        color, 
        taste, 
    }
}

const Fruits= [
    creatFruits("apple","red","sweet"),
    creatFruits("banana","yellow","sweet"),
    creatFruits("orange","orange","sweet"),
    creatFruits("mango","green","sweet"),
    creatFruits("kiwi","blue","sweet"),
    creatFruits("pineapple","purple","sweet"),
]

// access an invlid Index

const invlidIndex = 3;

console.log(`Fruits at index ${invlidIndex}:`,Fruits[invlidIndex]);

Fruits.forEach((fruits )=> {
    console.log(`Name: ${fruits.name}, color: ${fruits.color}, taste: ${fruits.taste}`);
})

export{};