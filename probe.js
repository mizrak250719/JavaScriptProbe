const fruits = [
  { name: "birne", symbol: "🍐", isSweet: true, price: 5.2 },
  { name: "banana", symbol: "🍌", isSweet: true, price: 3.2 },
  { name: "zitrone", symbol: "🍋", isSweet: false, price: 1.5 }
];

// imperative (for ...of)

const sourFruits = [];

for(const fruit of fruits)
{
  if(!fruit.isSweet)
  {
    const copyFruit = {
      ...fruit, price : fruit.price *2
    };
    sourFruits.push(copyFruit);
  }
}

console.log(sourFruits);