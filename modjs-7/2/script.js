`use strict`;

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const list = document.querySelector(`ul`);
for (const elem of ingredients) {
  let newLi = document.createElement(`li`);
  newLi.textContent = elem;
  list.append(newLi);
}
console.log(list);
