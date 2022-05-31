let n;
do {
  n = +prompt(`Введіть число N`)
} while (n % 1 !== 0);

let m;
do {
  m = +prompt(`Введіть число M`)
} while (m % 1 !== 0 || m <= n);

let passEvenNumber = confirm(`Чи потрібно пропускати парні числа?`);

let result = 0;
for (let і = n; і <= m; і++) {
    if (passEvenNumber && і % 2 == 0) {
      continue;
  } else {
    result += і;
  }
  
}

alert(`Сума чисел = ${result}`);
  