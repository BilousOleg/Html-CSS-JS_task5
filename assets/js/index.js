/**
 * Side-effect function that gets value from user and determines, is it a number, and if it is, determines whether it is greater, equal or less than zero
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
