const getNamesSortedByFriendsCount = users =>
  users
    .sort(
      (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length,
    )
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
