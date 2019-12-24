`use strict`;

// task 1

// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const x = document.querySelector(`#categories`);
console.log(`в списке ${x.childElementCount} категории`);

const categories = Array.from(document.querySelector("#categories").children);

const y = categories.forEach(elem => {
  const title = elem.querySelector(`h2`);
  const quantity = elem.querySelector(`ul`).children.length;
  console.log(`Категория: ${title.innerText}`);
  console.log(`Количество элементов: ${quantity}`);
});



