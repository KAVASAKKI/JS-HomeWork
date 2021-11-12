console.table(users);
const getUsersWithGender = gender =>
  users.filter(user => user.gender === gender).map(user => user.name);

console.table(getUsersWithGender('male'));
