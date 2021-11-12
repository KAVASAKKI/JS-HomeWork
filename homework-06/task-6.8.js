console.table(users);
const getUsersWithFriend = (users, friendName) =>
  users.reduce((acc, user) => {
    const friend = user.friends;
    if (friend.includes(friendName)) {
      return [...acc, user.name];
    }
    return acc;
  }, []);

// let res = [];
// for (let index = 0; index < users.length; index++) {
//   const user = users[index];
//   const friend = user.friends;
//   if (friend.includes(friendName)) {
//     res.push(user.name);
//   }
// }
// return res;

// let res = [];
// users.forEach(user => {
//   const friend = user.friends;
//   if (friend.includes(friendName)) {
//     res.push(user.name);
//   }
// });
// return res;

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
