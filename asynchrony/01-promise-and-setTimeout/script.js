const start = Date.now();
const arr = [];

// var меняем на let, что бы ограничить переменную блочной областью видимости
for (let i = 0; i < 5; i++) {
  // создаем массив промисов
  arr.push( new Promise((res, rej) => {
    setTimeout(() => {
	  console.log(i, Date.now() - start);
      // когда запустится коллбэк из setTimeout, наш промис разрешится
      res();
	}, Math.random() * 1000); // Math.random() изменила для проверки вывода finish
  }));
}

// когда весь массив промисов исполниться, переходим в блок then и запускаем коллбэк
Promise.all(arr)
  .then(() => console.log('finish', Date.now() - start));