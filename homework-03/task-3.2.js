const countProps = function (object) {
  const keys = Object.keys(object);
  return keys.length;
};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(
  countProps({ mail: 'p.omel4enko2002@gmail.com', isOnline: true, score: 500 }),
);
