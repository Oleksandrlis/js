const ADMIN_PASSWORD = "jqueryismyjam";
let message = prompt("введите пароль");

if (message === null) {
  alert("отмена");
} else if (message === ADMIN_PASSWORD) {
  alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}
