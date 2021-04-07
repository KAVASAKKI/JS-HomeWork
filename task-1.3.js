const ADMIN_PASSWORD = 'mudak228';
let message;
let result = prompt('Введите пароль');

if (result === null) message = 'Отменено пользователем';
else if (result === ADMIN_PASSWORD) message = 'Добро пожаловать!';
else message = 'Доступ запрещен, неверный пароль!';

alert(message);
