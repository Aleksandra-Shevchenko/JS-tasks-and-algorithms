
# Задача 1

[Просмотреть решение](https://github.com/Aleksandra-Shevchenko/JS-tasks-and-algorithms/blob/main/asynchrony/01-promise-and-setTimeout/script.js) 

Необходимо исправить данный скрипт, что бы finish исполнялся в самом конце и внтури каждого шага цикла выводились верные значения.

```
const start = Date.now();
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i, Date.now() - start);
  }, i * 1000);
}
console.log('finish', Date.now() - start);
```
