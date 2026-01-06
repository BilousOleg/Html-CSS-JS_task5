// Завдання 1

/**
 * Function compares two values
 * @param {*} firstValue First comparand
 * @param {*} secondValue Second comparand
 * @returns {* | null} larger comparand or null, if the types of values are different, or values are equal
 */
function compareValues(firstValue, secondValue) {
  if (firstValue !== secondValue && typeof firstValue === typeof secondValue) {
    return firstValue > secondValue ? firstValue : secondValue;
  } else {
    return null;
  }
}

// Приклади використання функції
console.log(compareValues(1, 2)); // Однакові типи даних (Number)
console.log(compareValues('1', 2)); // Різні типи даних
console.log(compareValues('b', 'a')); // Однакові типи даних (string)
console.log(compareValues(1, 1)); // Однакові значення

// Завдання 2

/**
 * Side-effect function that gets value from user and determines, is it a number, and if it is, determines whether it is greater, equal or less than zero
 * Uses alert(), prompt(), .isNaN(), Number() and .trim()
 * @returns {void}
 */
function determineNumber() {
  const inputValue = prompt('Введіть число');
  if (
    inputValue === null ||
    inputValue.trim() === '' ||
    Number.isNaN(Number(inputValue))
  ) {
    alert('Це не число');
  } else {
    if (inputValue !== '0') {
      alert(inputValue > 0 ? 'Додатнє' : "Від'ємне");
    } else {
      alert('Нуль');
    }
  }
}

// Приклад використання (немає аргументів, оскільки це виключно side-effect функція)
determineNumber();

// Завдання 3

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
  if (isNumber(inputNumber) && isNumber(dividend)) {
    return dividend % inputNumber === 0;
  }
  return false;
}

// Приклад використання
console.log(isDivisor(10)); // У випадку, коли число є дільником
console.log(isDivisor(9)); // У випадку, коли число не є дільником
console.log(isDivisor('ab')); // У випадку, коли введено нечисловий тип даних
console.log(isDivisor(1, 'cd')); // У випадку, коли введено нечисловий тип даних у якості необов'язкового аргументу

// Завдання 4

/**
 * Funciton gets value and checks whether it is number or not
 * @param {*} inputValue Value to check
 * @returns {boolean}
 */
function isNumber(inputValue) {
  return typeof inputValue === 'number';
}

/**
 * Function gets 3 sides and determines existence of tringale by their lenght
 * Uses Number(), .isNaN()
 * @param {number} [firstSide = 3] First side of triangle
 * @param {number} [secondSide = 4] Second side of triangle
 * @param {number} [thirdSide = 5] Third side of triangle
 * @returns {boolean}
 */
function isTriangle(firstSide = 3, secondSide = 4, thirdSide = 5) {
  if (isNumber(firstSide) && isNumber(secondSide) && isNumber(thirdSide)) {
    return (
      firstSide + secondSide > thirdSide &&
      firstSide + thirdSide > secondSide &&
      secondSide + thirdSide > firstSide
    );
  } else {
    return false;
  }
}

// Приклад використання функції
console.log(isTriangle(4, 5, 6)); // Якщо будь-яка сума двох сторін більша за третю
console.log(isTriangle(1, 2, 3)); // Якщо хоча б одна з сум двох сторін не більша за третю
console.log(isTriangle('', '12', null)); // Якщо введені інші типи даних
console.log(isTriangle()); // При використанні значень за замовчуванням
