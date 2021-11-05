class Storage {
  constructor([...items]) {
    this._items = items;
  }

  getItem() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
  }

  removeItem(item) {
    this._items.splice(items.indexOf(item), 1);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItem();
console.table(items);

storage.addItem('Дроид');
console.table(items);

storage.removeItem('Железные жупи');
console.table(items);
