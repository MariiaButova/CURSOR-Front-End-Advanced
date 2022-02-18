'use strict'

const PRICE_BANAN = 15.678;
const PRICE_ORANGE = 123.965;
const PRICE_MANGO = 90.2345;
const MAX_PRICE = Math.max(PRICE_BANAN, PRICE_ORANGE, PRICE_MANGO);
console.log(`Максимальна ціна: ${MAX_PRICE}`);
const MIN_PRICE = Math.min(PRICE_BANAN, PRICE_ORANGE, PRICE_MANGO);
console.log(`Мінімальна ціна: ${MIN_PRICE}`);
const PRICE_ALL_PRODACT = PRICE_BANAN + PRICE_ORANGE + PRICE_MANGO;
console.log(`Вартість всіх продуктів: ${PRICE_ALL_PRODACT}`);
const PRICE_WITHOUT_PENNIES = Math.floor(PRICE_BANAN) + Math.floor(PRICE_ORANGE) + Math.floor(PRICE_MANGO);
console.log(`Вартіть всіх продуктів без копійок: ${PRICE_WITHOUT_PENNIES}`);
const ROUNDED_PRICE = Math.round((PRICE_WITHOUT_PENNIES)/100)*100;
console.log(`Вартійсть всіх продуктів округлена до сотень: ${ROUNDED_PRICE}`);
const IS_EVEN_NUMBER = ROUNDED_PRICE %2 ===0;
console.log(`Чи є вартість всіх товарів парним числом: ${IS_EVEN_NUMBER}`);
const REMAINDER = 500 - PRICE_ALL_PRODACT;
console.log(`Решта: ${REMAINDER}`);
const MIDDLE_PRICE = (PRICE_ALL_PRODACT / 3).toFixed(2);
console.log(`Середнє значення цін: ${MIDDLE_PRICE}`); 
const DISCOUNT = Math.round(Math.random()*100);
console.log(`Знижка: ${DISCOUNT}%`);
const NUM_DISCOUNT = DISCOUNT / 100;
const PRICE_WITH_DISCOUNT = (PRICE_ALL_PRODACT - PRICE_ALL_PRODACT * NUM_DISCOUNT).toFixed(2);
console.log(`Ціна зі знижкою: ${PRICE_WITH_DISCOUNT}`);
const PRIME_COST = (PRICE_ALL_PRODACT / 2).toFixed(2);
console.log(`Собівартість продуктів: ${PRIME_COST}`);
const NET_PROFIT = (PRIME_COST - PRICE_ALL_PRODACT * NUM_DISCOUNT).toFixed(2);
console.log(`Чистий прибуток: ${NET_PROFIT}`);


