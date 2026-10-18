const fruits = [
  { name: "birne", symbol: "🍐", isSweet: true, price: 5.2 },
  { name: "banana", symbol: "🍌", isSweet: true, price: 3.2 },
  { name: "zitrone", symbol: "🍋", isSweet: false, price: 1.5 }
];

// 1. Nur süße Früchte
const sweetFruits = fruits.filter(fruit => fruit.isSweet);

// 2. Nur saure Früchte, Preis verdoppeln
const sourFruits = fruits
  .filter(fruit => !fruit.isSweet)
  .map(fruit => ({ ...fruit, price: fruit.price * 2 }));

console.log("Süße Früchte:");
console.log(sweetFruits);

console.log("Saure Früchte mit doppeltem Preis:");
console.log(sourFruits);

console.log("Originalpreis der Zitrone:");
console.log(fruits[2].price);