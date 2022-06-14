// Функція 1
function getMaxDigit(number) {
    const arrayNumber = Array.from(String(number));
    return Math.max(...arrayNumber);
}
console.log(`Функція 1: ${getMaxDigit(12365487)}`)

// Функція 2
function getNumberDegree(number, degree){
  let result = number;
  for(let i = 1 ; i < degree; i++)
  {
    result = result * number;
  }
  return(result);
}
console.log(`Функція 2: ${getNumberDegree(3, 4)}`);

// Функція 3
function formatName(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(`Функція 3: ${formatName("ПеТро")}`);

//Функція 4
function calcTax(number){
  const percent = 1 - 0.195;
  return number * percent;
}
console.log(`Функція 4: ${calcTax(200)}`);

// Функція 5
function getRandomNumber(n, m) {
  return Math.round(Math.random() * (m - n) + n);
}
console.log(`Функція 5: ${getRandomNumber(1, 10)}`);

// Функція 6
function countLetter(string, letter){
  let count = 0;
  const userString = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (userString.charAt(i) === letter) {
      count += 1;
    }
  }
  return count;
}
console.log(`Функція 6: ${countLetter("Асталавіста", "а")}`);

// Функція 7, 8
function convertCurrency(sum) {
  const userSum = sum.toUpperCase();
  let result
  if (userSum.includes('$')) {
    result = parseInt(userSum) * 32
  } else if (userSum.includes('UAH')) {
    result = parseInt(userSum) / 32;
  } else {
    result = 'Error'
  }
  return result;
}
console.log(`Функція 7: ${convertCurrency('100uah')}`);


//Функція 9
function getRandomPassword(length = 8) {
  let pass = "";
  for (let i = 0; i < length; i++){
    pass += Math.floor(Math.random() * 10);
  }
  return pass
}
console.log(`Функція 9: ${getRandomPassword(6)}`);

// Функція 10
function deleteLetters(letter, string) {
  return string.replaceAll(letter, '');
}
console.log(`Функція 10: ${deleteLetters("a", "blabalbala")}`)


