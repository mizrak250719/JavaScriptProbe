const fruits = [
    { name: "birne", isSweet: true, price: 5.2 },
    { name: "banana", isSweet: true, price: 3.2 },
    { name: "zitrone", isSweet: false, price: 1.5 }
];

function doubleSourPrices(fruits) {

    const result = [];

    for (const fruit of fruits) {
        if (!fruit.isSweet) {

            const newFruit = {
                ...fruit,
                price: fruit.price * 2
            };

            result.push(newFruit);
        }
    }

    return result;
}

const newFruits = doubleSourPrices(fruits);

console.log(newFruits);


//------------------------------

function doubleNumber(number) {
    return number * 2;
}

console.log(doubleNumber(5));



const doubleNumber = (number) => {
    return number * 2;
};

console.log(doubleNumber(5));




