
// решениe для более длинных строк
function palindrome(str) {
  if (typeof str !==  'string') return 'Parameter must be a string';
  
  const cleanWord = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,'');
  const lengthWord = cleanWord.length;

  for (let i = 0; i <= Math.ceil(lengthWord / 2); i++) {
    if (cleanWord[i] === cleanWord[lengthWord - 1 - i]) return true;
    return false;
  }
}

// короткое в записи решение:
function palindrome2(str) {
  if (typeof str !==  'string') return 'Parameter must be a string';
  str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,'');
  return str === str.split('').reverse().join('');
}


// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(palindrome('топот')); // true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true

console.log(palindrome2('топот')); // true
console.log(palindrome2('Saippuakivikauppias')); // true
console.log(palindrome2('привет')); // false
console.log(palindrome2('О, лета тело!')); // true



