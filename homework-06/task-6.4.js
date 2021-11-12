console.table(users);
const getInactiveUsers = users => users.filter(user => user.isActive === false);

console.log(getInactiveUsers(users));
