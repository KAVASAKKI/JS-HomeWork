const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age <= max && user.age >= min);

console.table(getUsersWithAge(users, 20, 30));
console.table(getUsersWithAge(users, 30, 40));
