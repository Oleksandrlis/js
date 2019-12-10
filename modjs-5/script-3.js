`use strict`;
class Storage {
  constructor(arrey) {
    this.item = arrey;
  }
  getItems() {
    return this.item;
  }

  addItem(item) {
    this.item.push(item);
  }

  removeItem(item) {
    for (const value of this.item) {
      if (value === item) {
        let index = this.item.indexOf(value);
        this.item.splice(index, 1);
      }
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]