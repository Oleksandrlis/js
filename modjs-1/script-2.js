const total = 100;
let ordered = prompt("order");

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
}

if (ordered < total) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
