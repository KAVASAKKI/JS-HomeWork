console.table(users);

const getSortedUniqueSkills = users => {
  const sortAllSkills = users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .sort((prevUser, nextUser) => {
      const result = prevUser < nextUser;

      if (result) return -1;
      if (!result) return 1;
    });
  return sortAllSkills.filter(
    (item, pos) => sortAllSkills.indexOf(item) === pos,
  );
};

console.log(getSortedUniqueSkills(users));
