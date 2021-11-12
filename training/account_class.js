class Account {
  static DEPOSIT = 'deposit';
  static WITHDRAW = 'withdraw';

  constructor(balance = 0, transactions = [], id = 0) {
    this._balance = balance;
    this._transactions = transactions;
    this._id = id;
  }

  createTransaction(amount, type) {
    id = ++this._id;
    const newTransaction = {
      id,
      amount,
      type,
    };

    this._transactions.push(newTransaction);

    if (newTransaction.type === 'deposit') {
      this._balance += amount;
    } else if (newTransaction.type === 'withdraw') {
      this._balance -= amount;
    }

    return newTransaction;
  }

  // getTransactions() {
  //   console.log('История транзакций: ');
  //   for (const transaction of this._transactions) {
  //     console.log(transaction);
  //   }
  // }
  get transaction() {
    console.log('История транзакций: ');
    for (const transaction of this._transactions) {
      console.log(transaction);
    }
  }

  // deposit(amount) {
  //   this.createTransaction(amount, DEPOSIT);
  // }
  set deposit(amount) {
    this.createTransaction(amount, DEPOSIT);
  }

  // withdraw(amount) {
  //   if (amount > balance) {
  //     return console.log(
  //       `Транзакция отменена! На вашем счёту не достаточно средств!`,
  //     );
  //   } else {
  //     this.createTransaction(amount, WITHDRAW);
  //   }
  // }
  set withdraw(amount) {
    if (amount > balance) {
      return console.log(
        `Транзакция отменена! На вашем счёту не достаточно средств!`,
      );
    } else {
      this.createTransaction(amount, WITHDRAW);
    }
  }

  get balance() {
    return `Текущий баланс: ${this._balance}`;
  }

  getTransactionDetails(id) {
    console.log(`Результат поиска транзакции по id "${id}":`);
    for (const transaction of this._transactions) {
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  }

  getTransactionTotal(type) {
    console.log(`Результат поиска транзакции по типу "${type}":`);
    for (const transaction of this._transactions) {
      if (transaction.type === type) {
        console.log(transaction);
      }
    }
  }
}

const account = new Account();
const { DEPOSIT, WITHDRAW } = Account;
let { balance, transactions, id } = account;

account.createTransaction(3000, DEPOSIT); //Создание транзакции
account.createTransaction(1488, WITHDRAW);

account.deposit = 5000; //Пополнение средств
account.withdraw = 3456; //Снятие стредств

account.transaction; //История транзакций
console.log(account.balance); //Текущий баланс

account.getTransactionDetails(2); //Поиск транзакции по id
account.getTransactionTotal(WITHDRAW); //Поиск транзакции по типу
