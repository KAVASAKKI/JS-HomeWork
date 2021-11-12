// const Car = function ({ brand, model, price, description } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   this.description = description;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// Car.prototype.GetDescription = function ({ brand, model, description } = this) {
//   console.log(`Описание ${brand} ${model}: ${description}`);
// };

// Car.prototype.logInfo = function () {
//   console.log('Car.logInfo -> carObj', this);
// };

// const car = new Car({
//   brand: 'BMW',
//   model: 'X5',
//   price: 100000,
//   description: 'Это беха!',
// });

// const car2 = new Car({
//   brand: 'Audi',
//   model: 'Q6',
//   price: 50000,
//   description: 'Это аудюха!',
// });

// car.changePrice(20000);
// car2.changePrice(15000);

// car.logInfo();
// car2.logInfo();

// car.GetDescription();
// car2.GetDescription();

// const objA = {
//   x: 1,
// };

// const objB = Object.create(objA);
// objB.y = 2;

// const objC = Object.create(objB);
// objC.z = 3;

// console.log('ObjA ->', objA);
// console.log('ObjB ->', objB);
// console.log('ObjC ->', objC);

class Car {
  static logInfo(carObj) {
    console.log('Car.logInfo -> carObj', carObj);
  }

  constructor({ brand, model, price, description } = {}) {
    this._brand = brand;
    this._model = model;
    this._price = price;
    this._description = description;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  get description() {
    return this._description;
  }
}

const car = new Car({
  brand: 'BMW',
  model: 'X5',
  price: 100000,
  description: 'Это беха!',
});

const car2 = new Car({
  brand: 'Audi',
  model: 'Q6',
  price: 50000,
  description: 'Это аудюха!',
});

car.price = 12000;
car2.price = 4341;

Car.logInfo(car);
Car.logInfo(car2);
