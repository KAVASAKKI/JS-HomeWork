const cart = {
  items: [],
  getItems() {
    return this.items;
  },
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
  },
  remove(itemName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        this.items.splice([i], 1);
      }
    }
  },
  clear() {
    this.items.splice(0);
    console.log('Корзина очищена');
  },
  countTotalPrice() {
    let totalPrice = 0;

    for (let i = 0; i < this.items.length; i++) {
      const price = this.items[i].price;
      const quantity = this.items[i].quantity;

      totalPrice += price * quantity;
    }

    return totalPrice;
  },
  increaseQuantity(itemName, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        this.items[i].quantity += quantity;
      }
    }
  },
  decreaseQuantity(itemName, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === itemName) {
        this.items[i].quantity -= quantity;
      }
    }
  },
};

cart.add({ name: 'apple', price: 50 }); //Метод добавления продукта
cart.add({ name: 'apple', price: 50 }); //Метод добавления продукта
cart.add({ name: 'lemon', price: 80 });
cart.add({ name: 'watermelon', price: 90 });
cart.add({ name: 'strawberry', price: 120 });

// cart.remove('strawberry'); //Метод удаления продукта

// cart.clear(); //Метод очистки корзины

cart.increaseQuantity('apple', 1); //Метод увеличения кол-ва продуктов
cart.decreaseQuantity('lemon', 1); //Метод уменьшения кол-ва продуктов

console.table(cart.getItems()); //Метод вывода продуктов (корзины)

console.log('Общая стоимость товаров в корзине:', cart.countTotalPrice()); // Сума продуктов в корзине
