/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/


function findVowels(str) {
    const vowelsArr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowelsArr.includes(char)){
            count += 1;
        }
    }
    return count;
}




// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3


// function findVowels(str) {
//     const ourArr = str.toLowerCase().split('');
//     const vowelsArr = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

//     // создаем новый массив, содержащий только гласные буквы
//     const dirtyArr = vowelsArr.map(function (element) {
//         //берем каждую букву нашего слова и сравниваем с каждым эл-том массива гласных
//         // Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.
//         const newLetter = ourArr.find(item => item === element);
//         return newLetter;
//     });

//     // создаем чистый массив без пустых элементов undefined
//     const cleanVolwelsArr = dirtyArr.filter(element => {return element;})

//     return cleanVolwelsArr.length 

// };