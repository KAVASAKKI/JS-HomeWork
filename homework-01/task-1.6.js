let total = 0;
let reg = /^[0-9]$/;

function calculateInputData() {
  let input = +prompt('Введите число');

  do {
    total += input;
    input = +prompt('Введите число');
  } while (reg.test(input));

  if (!reg.test(input)) {
    alert('Было введено не число, попробуйте еще раз');
    total += input = +prompt('Введите число, а не строку:');
  }
  alert(`Общая сумма чисел равна [${total}]`);
}
