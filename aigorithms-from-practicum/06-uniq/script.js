/*
 * Задача 6: «Уникальные числа»
 *
 * Напишите функцию uniq(arr), принимающую на вход массив целых чисел.
 * Функция должна возвращать массив уникальных чисел, которые содержатся
 * в переданном массиве. То есть, дубликаты должны быть удалены.
 * 
*/

function uniq(arr) {  

    const uniqArr = arr.filter((item, index) => {
        return index === arr.indexOf(item);
    });

    return uniqArr;
}



// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(uniq([1, 2, 5, 4, 2])); // [1, 2, 5, 4]
console.log(uniq([3, 3, 3, 5])); // [3, 5]
console.log(uniq([1, 4, 2, 2, 3, 4, 8])); // [1, 4, 2, 3, 8]


//уникальные числа отсортированного массива
function uniqSort(arr) {  
    arr.sort( (a, b) => a - b );

    const result = arr.filter(function(item, index, array) {
        if (item !== array[index + 1]) {
            return item;
        }
    });

    return result;
}