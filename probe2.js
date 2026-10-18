const numbers = [1,2,3];
const names = ["Ana", "Bob", "Carl"];
const mixed = [1, "Ana", true];

console.log(names[0]); // Ana
console.log(names[1]); // Bob
console.log(names[2]); // Carl

console.log(names[3]);

console.log(names[2]);


console.log(numbers.length);


for(let i =0; i < numbers.length; i++)
{
    console.log(numbers[i]);
}


for(const number of numbers)
{
    console.log(number);
}





for(const name of names)
{
    console.log(name);
}

