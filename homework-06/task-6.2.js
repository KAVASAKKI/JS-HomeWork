const getUsersWithEyeColor = color =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor('blue'));
