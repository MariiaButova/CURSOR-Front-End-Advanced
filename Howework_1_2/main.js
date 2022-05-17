'use strict'
const ORANGE_PRICE = 15.678;
const BANANA_PRICE = 123.965;
const EGG_PRISE = 90.2345;

const MIN_PRICE = Math.min(ORANGE_PRICE, BANANA_PRICE, EGG_PRISE);
console.log(`Мінімальна ціна: ${MIN_PRICE}`)

const MAX_PRICE = Math.max(ORANGE_PRICE, BANANA_PRICE, EGG_PRISE);
console.log(`Максимальна ціна: ${MAX_PRICE}`);

const TOTAL_PRICE = ORANGE_PRICE + BANANA_PRICE + EGG_PRISE;
console.log(`Загальна вартість всіх товарів: ${TOTAL_PRICE}`);

const TOTAL_PRICE_WITHOUT_PENNIES = Math.floor(ORANGE_PRICE) + Math.floor(BANANA_PRICE) + Math.floor(EGG_PRISE);
console.log(`Загальна вартість товарів без копійок: ${TOTAL_PRICE_WITHOUT_PENNIES}`);

const ROUNDED_TOTAL_PRICE = Math.round( TOTAL_PRICE_WITHOUT_PENNIES / 100)*100;
console.log(`Сума товарів округлена до сотень ${ROUNDED_TOTAL_PRICE}`);

const IS_EVEN_NUMBER = TOTAL_PRICE_WITHOUT_PENNIES %2 === 0 ;
console.log(`Чи парне число: ${IS_EVEN_NUMBER}`);

const REMAINDER = 500 - TOTAL_PRICE;
console.log(`Решта: ${REMAINDER}`);

const AVERAGE_PRICE = (TOTAL_PRICE / 3).toFixed(2)
console.log(`Середнє значення цін: ${AVERAGE_PRICE}`);

const DISCOUNT = Math.round(Math.random()* 100);
console.log(`Випадкова знижка: ${DISCOUNT}%`);

const PRICE_WITH_DISCOUNT = (TOTAL_PRICE / 100 *(100 - DISCOUNT)).toFixed(2);
console.log(`Ціна зі знижкою: ${PRICE_WITH_DISCOUNT}`);

const NET_PROFIT = ((TOTAL_PRICE / 2) - (TOTAL_PRICE / 100 * DISCOUNT)).toFixed(2);
console.log(`Чистий прибуток: ${NET_PROFIT}`);