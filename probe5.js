const fruits = [
    { name: "birne", isSweet: true, price: 5.2 },
    { name: "banana", isSweet: true, price: 3.2 },
    { name: "zitrone", isSweet: false, price: 1.5 }
];



for (const fruit of fruits)
{
    if(!fruit.isSweet)
    {
        const newFruit ={
            ...fruit, price: fruit.price*2
        };

console.log(newFruit);

    }
}