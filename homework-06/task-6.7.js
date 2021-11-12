console.table(users);
const calculateTotalBalance = users =>
  users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
