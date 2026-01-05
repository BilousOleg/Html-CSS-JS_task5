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
