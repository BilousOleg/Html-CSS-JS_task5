/**
 * Function gets a number and checks whether it is a divisor of divident
 * @param {number} inputNumber Number to check
 * @param {number} [dividend = 100] Divident (optional parameter, default value = 100)
 * @returns {boolean}
 */
function isDivisor(inputNumber, dividend = 100) {
  return dividend % inputNumber === 0;
}

// Приклад використання
console.log(isDivisor(10)); // У випадку, коли число є дільником
console.log(isDivisor(9)); // У випадку, коли число не є дільником
