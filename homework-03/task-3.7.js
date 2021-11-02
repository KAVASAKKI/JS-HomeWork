const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const newTransaction = {};

    newTransaction.amount = amount;
    newTransaction.type = type;

    transactions.push(newTransaction);

    newTransaction.id = transactions.indexOf(newTransaction) + 1;

    if (newTransaction.type === 'deposit') {
      balance += amount;
    } else if (newTransaction.type === 'withdraw') {
      balance -= amount;
    }

    return newTransaction;
  },
  deposit(amount) {
    this.createTransaction(amount, DEPOSIT);
  },
  withdraw(amount) {
    if (amount > balance) {
      return console.log(
        `Транзакция отменена! На вашем счёту не достаточно средств!`,
      );
    } else {
      this.createTransaction(amount, WITHDRAW);
    }
  },
  getBalance() {
    return `Текущий баланс: ${balance}`;
  },
  getTransactions() {
    console.log('История транзакций: ');
    for (const transaction of transactions) {
      console.log(transaction);
    }
  },
  getTransactionDetails(id) {
    console.log(`Результат поиска транзакции по id "${id}":`);
    for (const transaction of transactions) {
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  },
  getTransactionTotal(type) {
    console.log(`Результат поиска транзакции по типу "${type}":`);
    for (const transaction of transactions) {
      if (transaction.type === type) {
        console.log(transaction);
      }
    }
  },
};

let { balance, transactions } = account; //Деструкция обьектов
const { DEPOSIT, WITHDRAW } = Transaction;

account.createTransaction(3000, DEPOSIT); //Создание транзакции
account.createTransaction(1488, WITHDRAW);

account.deposit(5000); //Пополнение средств
account.withdraw(3456); //Снятие стредств

account.getTransactions(); //История транзакций
console.log(account.getBalance()); //Текущий баланс

account.getTransactionDetails(2); //Поиск транзакции по id
account.getTransactionTotal(WITHDRAW); //Поиск транзакции по типу
