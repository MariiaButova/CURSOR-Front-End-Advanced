'use strict'

const priсeBanana = 15.678;
const priсeOrange = 123.965;
const priсeMango = 90.2345;
const maxPrice = Math.max(priсeBanana, priсeOrange, priсeMango);
console.log('Максимальна ціна: ' + maxPrice);
const minPrice = Math.min(priсeBanana, priсeOrange, priсeMango);
console.log('Мінімальна ціна: ' + minPrice);
const priceAllProdact = priсeBanana + priсeOrange + priсeMango;
console.log('Вартість всіх продуктів: ' + priceAllProdact);
const priceWithoutPennies = Math.floor(priсeBanana) + Math.floor(priсeOrange) + Math.floor(priсeMango);
console.log('Вартіть всіх продуктів без копійок: ' + priceWithoutPennies);
const roundedPrice = Math.round((priceWithoutPennies)/100)*100;
console.log('Вартійсть всіх продуктів округлена до сотень: ' + roundedPrice);
const isEvenNumber = roundedPrice %2 ===0;
console.log('Чи є вартість всіх товарів парним числом: ' + isEvenNumber);
const remainder = 500 - priceAllProdact;
console.log('Решта: ' + remainder);
const middlePrise = (priceAllProdact / 3).toFixed(2);
console.log('Середнє значення цін: ' + middlePrise); 
const discount = Math.round(Math.random()*100)
console.log('Знижка: ' + discount + '%');
const numDiscount = discount / 100;
const priceWithDiscount = (priceAllProdact - priceAllProdact * numDiscount).toFixed(2);
console.log('Ціна зі знижкою: ' + priceWithDiscount);
const primeCost = (priceAllProdact / 2).toFixed(2);
console.log('Собівартість продуктів: ' + primeCost);
const netProfit = (primeCost - priceAllProdact * numDiscount).toFixed(2);
console.log('Чистий прибуток: ' + netProfit)


