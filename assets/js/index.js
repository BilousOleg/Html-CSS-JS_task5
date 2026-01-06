/**
 * Funciton gets value and checks whether it is number or not
 * @param {*} inputValue Value to check
 * @returns {boolean}
 */
function isNumber(inputValue) {
  return typeof inputValue === 'number';
}

/**
 * Function gets a number and checks whether it is a divisor of divident
 * @param {number} inputNumber Number to check
 * @param {number} [dividend = 100] Divident (optional parameter, default value = 100)
 * @returns {boolean}
 */
function isDivisor(inputNumber, dividend = 100) {
  if (isNumber(inputNumber) === false || isNumber(dividend) === false) {
    return false;
  }
  return dividend % inputNumber === 0;
}

// Приклад використання
console.log(isDivisor(10)); // У випадку, коли число є дільником
console.log(isDivisor(9)); // У випадку, коли число не є дільником
console.log(isDivisor('ab')); // У випадку, коли введено нечисловий тип даних
console.log(isDivisor(1, 'cd')); // У випадку, коли введено нечисловий тип даних у якості необов'язкового аргументу
