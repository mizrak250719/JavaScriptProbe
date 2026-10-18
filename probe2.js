const fruits = [
    { name: "Apple", price: 1.50, isSweet: true },
    { name: "Lemon", price: 2.00, isSweet: false },
    { name: "Mango", price: 3.50, isSweet: true },
    { name: "Banana", price: 1.20, isSweet: true }
];

console.log(fruits[0].name);  // Apple
console.log(fruits[0].price); // 1.5

console.log(fruits[2].name);  
console.log(fruits[2].price); 

const expensiveFruits = fruits.filter(fruit => fruit.price > 2);
 console.log(expensiveFruits);


 const fruitNames = fruits.map(fruit => fruit.name);

console.log(fruitNames);


const doublePrices = fruits.map(fruit => fruit.price * 2);

console.log(doublePrices);