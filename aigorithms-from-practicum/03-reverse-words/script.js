/*
 * Задача 3: «Развернуть слова в предложении»
 *
 * Напишите функцию reverseWords(str), принимающую на вход строку.
 * Функция должна вернуть новую строку, расставив слова в обратном
 * порядке.Если в строке есть знаки препинания, их можно удалить
 * или оставить — на ваше усмотрение.
 *
*/

//Решение 2
function reverseWords(str) {
    const punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const wordsArr = punctuationless.replace(/\s{2,}/g," ").split(' ');
    
    return wordsArr.reverse().join(' ');  
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(reverseWords('всегда много путей достичь цель есть')); // "есть цель достичь путей много всегда"
console.log(reverseWords('испробовать их все должны вы'));


//Решение 1
function reverseWords1(str) {
    const punctuationless = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const wordsArr = punctuationless.replace(/\s{2,}/g," ").split(' ');
    
    const reversWordsArr = [];
    for (i = wordsArr.length - 1; i >= 0; i--) {
        reversWordsArr.push(wordsArr[i]);
    }

    return reversWordsArr.join(' ');  
}

//Решение 3
// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }