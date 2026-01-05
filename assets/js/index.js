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
  if (inputValue !== null) {
    if (inputValue.trim() === '') {
      alert('Це не число');
    } else {
      const numberValue = Number(inputValue);
      if (Number.isNaN(numberValue)) {
        alert('Це не число');
      } else {
        if (numberValue !== 0) {
          alert(numberValue > 0 ? 'Додатнє' : "Від'ємне");
        } else {
          alert('Нуль');
        }
      }
    }
  }
}

// Приклад використання (немає аргументів, оскільки це виключно side-effect функція)
determineNumber();
