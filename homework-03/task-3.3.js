const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let bestEmployee = Math.max(...values);

  for (const key of keys) {
    if (employees[key] === bestEmployee) {
      return key;
    }
  }

  // return Object.keys(employees).find(key => employees[key] === bestEmployee);
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
