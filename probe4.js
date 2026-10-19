const fruits = [
    { name: "birne", isSweet: true, price: 5.2 },
    { name: "banana", isSweet: true, price: 3.2 },
    { name: "zitrone", isSweet: false, price: 1.5 }
];


for(const fruit of fruits)
{
    if(!fruit.isSweet)
    {
    console.log(fruit.price*2);
    }
}