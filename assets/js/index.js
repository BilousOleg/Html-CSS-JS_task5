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
