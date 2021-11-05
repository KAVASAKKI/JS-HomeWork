const Account = function ({ login = 'login', email = 'email' }) {
  this._login = login;
  this._email = email;
};

Account.prototype.getInfo = function () {
  console.log('Login: ', this._login);
  console.log('Email: ', this._email);
};

const pavel = new Account({
  login: 'Pavel',
  email: 'PavelDev@gmail.com',
});

const serega = new Account({
  login: 'Serega',
  email: 'SeregaDev@gmail.com',
});

pavel.getInfo();
serega.getInfo();
