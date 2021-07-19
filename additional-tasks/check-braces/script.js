// Задача немного сложнее, но более интересная. Нужно написать функцию checkBraces, которая принимает строку и проверяет является ли правильной последовательность открывающих и закрывающих скобок. Функция возвращает true, если  все в порядке, и false если последовательность скобок нарушена.
// Например:
// checkBraces('(()[{()}][]())') => true - открывающие и закрывающие скобки идут в правильно порядке
// checkBraces('((]{(}][]())')  => false - не хватает открывающих и закрывающих скобок, скобки идут в неправильном порядке.


// мое решение
const defaultObj = {
  '(': ')',
  '{': '}',
  '[': ']',
}


function checkBraces(str, braces = defaultObj) {
  const myArr = str.split('');
  const startLengthArr = myArr.length;

  myArr.forEach((item, index, arr) => {
    if(Object.keys(braces).includes(item) && arr[index + 1] === braces[item]) {
      myArr.splice(index, 2);
    } else if (braces[item] === arr[arr.length - 1] && index === 0) {
      myArr.shift();
      myArr.pop();
    }
  });

  if (startLengthArr === myArr.length || myArr.length === 0) return Boolean(!myArr.length);
  else return checkBraces(myArr.join(''));
}



console.log(checkBraces('(()[{()}][]())'));
console.log(checkBraces('((]{(}][]())'));
console.log(checkBraces('([)]')); 