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
