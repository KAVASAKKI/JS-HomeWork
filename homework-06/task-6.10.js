console.table(users);

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .sort((prevUser, nextUser) => (prevUser < nextUser ? 1 : -1))
    .filter((item, pos, a) => pos === a.indexOf(item));

console.log(getSortedUniqueSkills(users));
