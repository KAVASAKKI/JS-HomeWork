let result = prompt('Введите страну');
let price = 0;
result = result.toLowerCase();

function output() {
  String.prototype.firstLetterCaps = function firstLetterCaps() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  };
  result = result.firstLetterCaps();
  alert(`Доставка в ${result} будет стоить ${price} кредитов`);
}

switch (result) {
  case 'китай':
    price = 100;
    output();
    break;

  case 'чили':
    price = 250;
    output();
    break;

  case 'австралия':
    price = 170;
    output();
    break;

  case 'индия':
    price = 80;
    output();
    break;

  case 'ямайка':
    price = 120;
    output();
    break;

  default:
    alert('В вашей стране доставка не доступна');
    break;
}
