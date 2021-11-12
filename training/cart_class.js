class Cart {
  items = [];

  constructor({ name, price } = []) {
    this._name = name;
    this._price = price;
  }

  getItems() {
    return this.items;
  }

  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  }

  remove(itemName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        this.items.splice([i], 1);
      }
    }
  }

  clear() {
    this.items.splice(0);
    console.log('Корзина очищена');
  }

  countTotalPrice() {
    let totalPrice = 0;

    for (let i = 0; i < this.items.length; i++) {
      const price = this.items[i].price;
      const quantity = this.items[i].quantity;

      totalPrice += price * quantity;
    }

    return totalPrice;
  }

  increaseQuantity(itemName, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        this.items[i].quantity += quantity;
      }
    }
  }

  decreaseQuantity(itemName, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        this.items[i].quantity -= quantity;
      }
    }
  }
}
const cart = new Cart();

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'lemon', price: 80 });
cart.add({ name: 'watermelon', price: 90 });
cart.add({ name: 'strawberry', price: 120 });

cart.increaseQuantity('apple', 10);
cart.increaseQuantity('watermelon', 1);
cart.increaseQuantity('strawberry', 5);

console.table(cart.getItems());
console.log('Общая стоимость товаров в корзине:', cart.countTotalPrice());

/*------------------------------------------------------------------------*/

const cart2 = new Cart();

cart2.add({ name: 'tomato', price: 30 });
cart2.add({ name: 'cucumber', price: 50 });
cart2.add({ name: 'onino', price: 20 });

console.table(cart2.getItems());
console.log('Общая стоимость товаров в корзине:', cart2.countTotalPrice());
