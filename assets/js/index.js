/**
 * Function gets 3 sides and determines existence of tringale by their lenght
 * Uses Number(), .isNaN()
 * @param {number} [firstSide = 3] First side of triangle
 * @param {number} [secondSide = 4] Second side of triangle
 * @param {number} [thirdSide = 5] Third side of triangle
 * @returns {boolean}
 */
function isTriangle(firstSide = 3, secondSide = 4, thirdSide = 5) {
  firstSide = Number(firstSide);
  secondSide = Number(secondSide);
  thirdSide = Number(thirdSide);

  if (
    Number.isNaN(firstSide) ||
    Number.isNaN(secondSide) ||
    Number.isNaN(thirdSide)
  ) {
    return false;
  }

  return (
    firstSide + secondSide > thirdSide &&
    firstSide + thirdSide > secondSide &&
    secondSide + thirdSide > firstSide
  );
}

// Приклад використання функції
console.log(isTriangle(4, 5, 6)); // Якщо будь-яка сума двох сторін більша за третю
console.log(isTriangle(1, 2, 3)); // Якщо хоча б одна з сум двох сторін не більша за третю
console.log(isTriangle('', '12', null)); // Якщо введені інші типи даних (і при приведенні типів отримуємо аналог другого прикладу)
console.log(isTriangle()); // При використанні значень за замовчуванням
