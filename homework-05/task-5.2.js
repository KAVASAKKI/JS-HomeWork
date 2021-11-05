class User {
  constructor({ name, age, followers }) {
    this._name = name;
    this._age = age;
    this._followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this._name} is ${this._age} years old and has ${this._followers} followers`,
    );
  }
}

const pavel = new User({
  name: 'Pavel',
  age: 19,
  followers: 467,
});

const serega = new User({
  name: 'Serega',
  age: 24,
  followers: 675,
});

pavel.getInfo();
serega.getInfo();
