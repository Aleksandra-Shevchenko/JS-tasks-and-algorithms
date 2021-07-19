/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.toLowerCase() !== str2.toLowerCase()) {
        str1 = str1.toLowerCase().split('').sort().join('');
        str2 = str2.toLowerCase().split('').sort().join('');

        return str1 === str2;
    }
    return false;

}

    

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP'))
console.log(anagram('cloose', 'esollc'))


// выводит не то значение для последней проверки
function anagram1(str1, str2) {
    if (str1.length === str2.length && str1.toLowerCase() !== str2.toLowerCase()) {
        for (let char of str1.toLowerCase().split('')) {
            if (str2.toLowerCase().includes(char)) {
            return true;
        } else {
            return false;
        }}
    }
    return false;
    
};