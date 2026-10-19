const fruits = [
    { name: "birne", symbol: "🍐", isSweet: true, price: 5.2 },
    { name: "banana", symbol: "🍌", isSweet: true, price: 3.2 },
    { name: "zitrone", symbol: "🍋", isSweet: false, price: 1.5 }
];



// 1. Ekşi meyveleri seç
const sourFruits = fruits.filter(fruit => !fruit.isSweet);

// 2. Yeni nesneler oluştur ve fiyatlarını iki katına çıkar
const result = sourFruits.map(fruit => ({
    ...fruit,
    price: fruit.price * 2
}));

console.log(result);

