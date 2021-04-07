const credits = 23580;
const pricePerDroid = 3000;

let result = prompt('Введите кол-во дроидов');
let message;
if (result === null) message = 'Отменено пользователем!';
else if (true) {
  var totalPrice = result * pricePerDroid;
  if (totalPrice > credits) {
    message = 'Недостаточно средств на счету';
  } else {
    let balence = credits - totalPrice;
    message = `Вы купили ${result} дроидов, на счету осталось ${balence} кредитов`;
  }
}
alert(message);
