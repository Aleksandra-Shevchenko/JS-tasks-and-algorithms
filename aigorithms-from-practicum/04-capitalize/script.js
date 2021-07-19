/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); //очищаем строку от "мусора"
    const wordsArr = punctuationless.replace(/\s{2,}/g," ").split(' '); // оставляем по одному пробелу между словами и создаем массив

    // создаем чистый массив без пустых элементов и пробелов
    const cleanWordsArr = wordsArr.filter(element => {
        return element;
    })

    // создаем массив слов начинающихся с больших букв
    const capitalizeWordsArr = cleanWordsArr.map(element => {
        element = element[0].toUpperCase() + element.slice(1);
        return element;
    })

    return capitalizeWordsArr.join(' ');
 }
 
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('     '));

