/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

//Мой вариант №2
function intersection(arr1, arr2) {
   
    const newArr = arr1.filter(item => arr2.includes(item));
    return newArr.filter((item, index) => index === newArr.indexOf(item));
    // фильтрую массив на предмет повторяющихся значений, задаю условие  - если индес текущего элемента 
    // равен первому же найденому индексу элемента с таким же значением
}

// Вариант 2 (от наставника)
// arr1.filter(value => arr2.includes(value)).filter((value, i, self) => self.indexOf(value) === i);
// arr1.filter(value => arr2.includes(value)) - создает пересечение массивов
// .filter((value, i, self) => self.indexOf(value) === index); - удаляет из пересечения дубликаты

// Или если использовать es6 то так
// return [... new Set(arr1)].filter(value => arr2.includes(value))


//Мой вариант №1
// function intersection(arr1, arr2) {
   
//     const newArr = arr1.map(item => {
//         if (arr2.includes(item)) {
//             return item;
//         }
//     })
//     return newArr.filter((item, index) => index === newArr.indexOf(item) && item);
// }


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // [1, 4]
console.log(intersection([1, 4, 1, 4, 2], [1, 91, 4, 8, 1, 3])); // [1, 4]
