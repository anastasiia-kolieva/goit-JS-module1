"use strict";

const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let userPassword = prompt("Введите пароль", " ");

if (userPassword === null) {
  message = "Отменено пользователем!";
} else {
  if (userPassword === ADMIN_PASSWORD) {
    message = "Добро пожаловать!";
  }
  if (userPassword !== ADMIN_PASSWORD) {
    message = "Доступ запрещен, неверный пароль!";
  }
}

alert(message);
