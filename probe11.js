// prompt-sync paketini çağırıyoruz
const prompt = require('prompt-sync')();

// Artık normal şekilde kullanabilirsin:
let girdi = prompt("Lütfen bir sayı girin: ");
let sayi = Number(girdi);

console.log("Girilen sayı:", sayi);